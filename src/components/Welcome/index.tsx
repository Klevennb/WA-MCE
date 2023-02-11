import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'types/redux';
import { Entry } from 'types/types';
import { Streak } from './Streak';
import { WelcomeQuote } from './WelcomeQuote';

type Props = {
  entryToEdit?: Entry;
};
export const Welcome = (props: Props) => {
  const { entryToEdit } = props;
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  const entries = useSelector((state: RootState) => state.entry);

  useEffect(() => {
    dispatch({ type: 'GET_ALL_ENTRIES' });
  }, []);

  console.log(entries);

  return (
    <div className="flex justify-center">
      <div>
        <div className="my-12 flex justify-center">
          <WelcomeQuote />
        </div>
        <div className="my-12 flex justify-center">
          <Streak entries={entries} />
        </div>
        <div className="flex justify-center">
          <div className="mx-12">
            <Button variant="outlined" size="medium">
              <Link to="/library">My Library</Link>
            </Button>
          </div>
          <div className="mx-12">
            <Button variant="contained" size="large">
              <Link to="/write">Get Writing</Link>
            </Button>
          </div>
          <div className="mx-12">
            <Button variant="outlined" size="medium">
              <Link to="/browse">Browse</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
