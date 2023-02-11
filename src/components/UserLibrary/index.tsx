import { Sidebar } from 'components/Sidebar/Sidebar';
import { User } from 'types/redux';
import { Entry } from 'types/types';
import { UserTable } from './Table';

type Props = {
  entries: Entry[];
  user: User;
};

export const UserLibrary = (props: Props) => {
  const { entries, user } = props;
  console.log(user);

  return (
    <div className="flex">
      <div className="mr-12">
        <Sidebar user={user} />
      </div>
      <div className="mt-4 w-9/12">
        <UserTable entries={entries} />
      </div>
    </div>
  );
};
