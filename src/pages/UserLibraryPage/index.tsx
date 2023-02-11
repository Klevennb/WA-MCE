import { UserLibrary } from 'components/UserLibrary';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'types/redux';

export const UserLibraryPage = () => {
  const dispatch = useDispatch();
  const entries = useSelector((state: RootState) => state.entry);
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch({ type: 'GET_ALL_ENTRIES' });
  }, []);

  return (
    <div>{entries.length && <UserLibrary user={user} entries={entries} />}</div>
  );
};
