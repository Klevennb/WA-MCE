import { Typography } from '@mui/material';
import { SearchBar } from 'components/Basic/SearchBar/SearchBar';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { User } from 'types/redux';
import { Entry } from 'types/types';
import { UserTable } from './Table';

type Props = {
  entries: Entry[];
  user: User;
};

export const UserLibrary = (props: Props) => {
  const { entries = [], user } = props;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEntries, setFilteredEntries] = useState(entries);

  useEffect(() => {
    const filterEntriesByName = (searchString: string): Entry[] => {
      return entries.filter((entry) => entry.name.includes(searchString));
    };

    if (searchQuery) {
      setFilteredEntries(filterEntriesByName(searchQuery));
    } else {
      setFilteredEntries(entries);
    }
  }, [entries, searchQuery]);

  return (
    <div className="flex">
      <div className="w-1/4 mr-12 mb-12">
        {entries.length > 0 && <Sidebar user={user} entries={entries} />}
      </div>
      <div className="mt-4 w-9/12 gap-3 gap-y-3 flex flex-col">
        <Typography variant="h4">My Library</Typography>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {entries.length > 0 ? (
          <UserTable entries={filteredEntries} />
        ) : (
          <Typography variant="h5">
            Once you start writing, your stories will go here!
          </Typography>
        )}
      </div>
    </div>
  );
};
