import { TextField } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { Credentials } from './Auth.types';

export const LoginFields = (props: {
  onChange: (val: Credentials) => void;
  errors: string;
}) => {
  const { onChange, errors = '' } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (
    val: string,
    func: Dispatch<SetStateAction<string>>,
  ) => {
    func(val);
    onChange({
      username,
      password,
    });
  };

  return (
    <div className="flex flex-col gap-y-4">
      <TextField
        value={username}
        onChange={(val) => handleChange(val.target.value, setUsername)}
      />
      <TextField
        value={password}
        onChange={(val) => handleChange(val.target.value, setPassword)}
        type="password"
      />
      {errors && errors}
    </div>
  );
};
