import { TextField, Button } from '@mui/material';
import { editEntry, saveEntry } from 'actions/entries';
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
  const [editorHasContent, setEditorHasContent] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const entries = useSelector((state: RootState) => state.entry);

  useEffect(() => {
    if (entryToEdit) {
      setTitle(entryToEdit.name);
    }
  }, [entryToEdit]);

  const handleSave = (editorContents: string, wordCount: number) => {
    if (entryToEdit) {
      dispatch(
        editEntry(
          entryToEdit?.id,
          editorContents,
          title,
          wordCount,
          isPublic,
          false,
        ),
      );
    } else {
      dispatch(saveEntry(editorContents, title, wordCount, isPublic));
    }
    history.push('/home');
  };

  return (
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
          <Button variant="contained">Get Prompt</Button>

          <Button variant="contained" onClick={() => setSaveToggle(true)}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
