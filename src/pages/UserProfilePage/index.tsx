import { UserProfile } from 'components/UserProfile';
import { useSelector } from 'react-redux';
import { RootState } from 'types/redux';

export const UserProfilePage = () => {
  const user = useSelector((state: RootState) => state.user);

  return <UserProfile user={user} />;
};
