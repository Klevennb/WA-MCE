import { Editor } from 'components/Editor';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'types/redux';

export const WritePage = () => {
  const { entryId } = useParams<any>();
  const dispatch = useDispatch();
  const entries = useSelector((state: RootState) => state.entry);
  const entryToEdit =
    entries.length > 0
      ? entries.find((entry) => entry.id === entryId)
      : undefined;

  useEffect(() => {
    dispatch({ type: 'GET_ALL_ENTRIES' });
  }, []);

  return (
    <div>
      <Editor entryToEdit={entryToEdit} />
    </div>
  );
};
