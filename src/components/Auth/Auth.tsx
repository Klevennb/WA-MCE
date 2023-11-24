import { loginUser, registerUser } from 'actions/auth';
import Button from 'components/Basic/Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Credentials } from './Auth.types';
import { LoginFields } from './LoginFields';
import { RegisterFields } from './RegisterFields';

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleToggleMode = () => {
    setIsLogin(!isLogin);
  };

  const onSubmit = () => {
    dispatch(isLogin ? loginUser(credentials) : registerUser(credentials));
  };

  const handleFieldChange = (fieldValues: Credentials) => {
    setCredentials(fieldValues);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black absolute opacity-70">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 justify-center">
        <h1 className="text-xl mb-4 flex justify-center">
          {isLogin ? 'Login To' : 'Register'} Account
        </h1>
        {isLogin ? (
          <LoginFields onChange={handleFieldChange} errors="" />
        ) : (
          <RegisterFields onChange={handleFieldChange} />
        )}
        <p
          className="cursor-pointer text-blue-500 mt-2"
          onClick={handleToggleMode}
          onKeyDown={handleToggleMode}
        >
          {isLogin
            ? "Don't have an account? Register here."
            : 'Already have an account? Login here.'}
        </p>
        <div className="flex justify-center w-full">
          <Button
            type="submit"
            disabled={
              credentials.password.length < 7 && credentials.username.length < 7
            }
            label={isLogin ? 'Login' : 'Register'}
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};
