import { TextField, Button } from '@mui/material';
import Typography from '@mui/material/Typography/Typography';
import { editEntry, saveEntry } from 'actions/entries';
import { PromptModal } from 'components/Basic/Modal/PromptModal';
import { SaveModal } from 'components/Basic/Modal/SaveModal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Prompts } from 'types/prompts';
import { RootState } from 'types/redux';
import { Entry } from 'types/types';
import { MCEEditor } from './MCEEditor';

type Props = {
  entryToEdit?: Entry | undefined;
};
export const Editor = (props: Props) => {
  const { entryToEdit } = props;
  const [title, setTitle] = useState(entryToEdit ? entryToEdit.name : '');
  const [saveToggle, setSaveToggle] = useState(false);
  const [isPublic, setIsPublic] = useState<boolean>();
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [prompt, setPrompt] = useState<string>('');
  const [editorContents, setEditorContents] = useState<any>();

  const dispatch = useDispatch();
  const history = useHistory();
  const entries = useSelector((state: RootState) => state.entry);

  useEffect(() => {
    if (entryToEdit) {
      setTitle(entryToEdit.name);
    }
  }, [entryToEdit]);
  const handleSave = () => {
    if (saveToggle === false) {
      return;
    }
    if (entryToEdit) {
      dispatch(
        editEntry(
          entryToEdit?.id,
          editorContents.editorContents,
          title,
          editorContents.wordCount,
          isPublic,
          false,
          prompt,
        ),
      );
    } else {
      dispatch(
        saveEntry(
          editorContents.editorContents,
          title,
          editorContents.wordCount,
          isPublic,
          prompt,
        ),
      );
    }
    setSaveToggle(false);

    history.push('/home');
  };
  useEffect(() => {
    handleSave();
  }, [isPublic]);

  const saveEditorContents = (_editorContents: string, wordCount: number) => {
    setEditorContents({ editorContents: _editorContents, wordCount });
  };

  const toggleModal = () => {
    setShowPromptModal((prevState) => !prevState);
  };

  const toggleSaveModal = () => {
    setSaveToggle(true);
    setShowSaveModal(true);
  };

  const handlePrompt = (_prompt: Prompts) => {
    setPrompt(_prompt.prompt);
  };

  const handleClose = () => {
    setShowSaveModal(false);
    setIsPublic(false);
  };
  return (
    <>
      <div>
        <div className="w-5/6">
          <div className="my-6 flex justify-center">
            <TextField
              className="w-1/2 "
              id="title"
              type="text"
              label="Title"
              value={title}
              onChange={(val) => setTitle(val.target.value)}
            />
          </div>
          <div className="flex justify-center w-full my-6 text-center mx-8">
            <Typography variant="h6">
              {prompt || entryToEdit?.prompt}
            </Typography>
          </div>

          <div className="w-full">
            <MCEEditor
              handleSave={saveEditorContents}
              saving={saveToggle}
              storyToEdit={entryToEdit?.content ? entryToEdit.content : ''}
            />
          </div>
          <div className="flex justify-around mx-1/2 ">
            <Button variant="contained" onClick={toggleModal}>
              Get Prompt
            </Button>

            <Button
              disabled={title === ''}
              variant="contained"
              onClick={toggleSaveModal}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
      <PromptModal
        open={showPromptModal}
        onUse={handlePrompt}
        handleOpen={toggleModal}
      />
      <SaveModal
        open={showSaveModal}
        handleSave={(val) => setIsPublic(val)}
        handleClose={handleClose}
      />
    </>
  );
};
