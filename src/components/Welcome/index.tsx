import Button from 'components/Basic/Button/Button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'types/redux';
import { Streak } from './Streak';
import { WelcomeQuote } from './WelcomeQuote';

export const Welcome = () => {
  const dispatch = useDispatch();
  const entries = useSelector((state: RootState) => state.entry);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'GET_ALL_ENTRIES' });
  }, []);

  const navigateTo = (path: string) => {
    history.push(path);
  };
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
            <Button
              variant="outlined"
              label="My Library"
              onClick={() => navigateTo('/library')}
            />
          </div>
          <div className="mx-12">
            <Button label="Get Writing" onClick={() => navigateTo('/write')} />
          </div>
          <div className="mx-12">
            <Button
              variant="outlined"
              label="Browse"
              onClick={() => navigateTo('/browse')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
