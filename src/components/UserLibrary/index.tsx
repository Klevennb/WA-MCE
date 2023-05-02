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

  return (
    <div className="flex">
      <div className="w-1/4 mr-12">
        <Sidebar user={user} entries={entries} />
      </div>
      <div className="mt-4 w-9/12">
        <UserTable entries={entries} />
      </div>
    </div>
  );
};
