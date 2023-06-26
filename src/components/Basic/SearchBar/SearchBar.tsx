import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = ({ setSearchQuery }: any) => (
  <form className="flex items-center">
    <TextField
      id="search-bar"
      className="text"
      onInput={(e: any) => {
        setSearchQuery(e.target.value);
      }}
      label="Search for an entry"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
    <SearchIcon />
  </form>
);
