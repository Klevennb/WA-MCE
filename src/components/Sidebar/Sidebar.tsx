import { User } from 'types/redux';

type Props = {
  user: User;
};

export const Sidebar = (props: Props) => {
  const { user } = props;
  return (
    <div className="flex flex-col bg-gray-300 w-64 h-screen px-4 tex-gray-900 border rounded mr-12 ml-8 mt-4">
      {user.username}
    </div>
  );
};
