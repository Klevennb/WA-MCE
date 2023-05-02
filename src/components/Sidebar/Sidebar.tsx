import LineBreak from 'components/Basic/LineBreak';
import { UserBio } from 'components/UserLibrary/UserBio/UserBio';
import { User } from 'types/redux';
import { Entry } from 'types/types';

type Props = {
  entries: Entry[];
  user: User;
};

function getInitials(name: string) {
  const words = name.split(' ');
  let initials = '';
  for (let i = 0; i < words.length; i++) {
    initials += words[i][0];
  }

  return initials.toUpperCase();
}

export const Sidebar = (props: Props) => {
  const { user } = props;

  return (
    <div className="flex flex-col bg-gray-300 w-full h-screen px-4 tex-gray-900 border rounded mr-12 ml-8 mt-4">
      <div className="flex m-4 align-center">
        <div className="bg-gray-500 text-white rounded-full h-10 w-10 flex items-center justify-center text-lg mr-2">
          <span>{getInitials(user.username)}</span>
        </div>
        <h2 className="uppercase text-slate-600 font-bold">{user.username}</h2>
      </div>
      <LineBreak variant="darkGray" />
      <div className="mt-3">
        <UserBio bio={user.bio} isUser />
      </div>
    </div>
  );
};
