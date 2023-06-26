import { User } from 'types/redux';

type Props = { user: User };

// This component will be a generic profile used generally to view other users profiles

export const UserProfile = (props: Props) => {
  const { user } = props;
  return <>UserProfile : {user.username}</>;
};
