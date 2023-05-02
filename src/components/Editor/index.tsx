import { TextField, Button } from '@mui/material';
import { editEntry, saveEntry } from 'actions/entries';
import { PromptModal } from 'components/Basic/Modal/PromptModal';
import { SaveModal } from 'components/Basic/Modal/SaveModal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
  const [isPublic, setIsPublic] = useState<any>();
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
        ),
      );
    } else {
      dispatch(
        saveEntry(
          editorContents.editorContents,
          title,
          editorContents.wordCount,
          isPublic,
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

  const handlePrompt = (_prompt: string) => {
    setPrompt(_prompt);
  };
  return (
    <>
      <div>
        <div className="w-5/6">
          <div className="my-12 flex justify-center">
            <TextField
              className="w-1/2 "
              id="title"
              type="text"
              label="Title"
              value={title}
              onChange={(val) => setTitle(val.target.value)}
            />
          </div>
          {/* <TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display' }}
            startDelay={100}
            cursorColor="black"
            text={title}
            typeSpeed={100}
            eraseSpeed={100}
          /> */}
          <div className="w-full">
            {entries.length > 0 && (
              <MCEEditor
                handleSave={handleSave}
                saving={saveToggle}
                storyToEdit={entryToEdit?.content ? entryToEdit.content : ''}
              />
            )}
            {entries.length === 0 && (
              <MCEEditor
                handleSave={handleSave}
                saving={saveToggle}
                storyToEdit=""
              />
            )}
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
        handleClose={toggleSaveModal}
      />
    </>
  );
};
