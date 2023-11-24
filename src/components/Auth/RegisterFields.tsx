import { TextField } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { Credentials } from './Auth.types';

export const RegisterFields = (props: {
  onChange: (val: Credentials) => void;
}) => {
  const { onChange } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
        label="Username"
        value={username}
        onChange={(val) => handleChange(val.target.value, setUsername)}
      />
      <TextField
        label="Password"
        value={password}
        onChange={(val) => handleChange(val.target.value, setPassword)}
        type="password"
      />
      <TextField
        label="Confirm Password"
        value={confirmPassword}
        onChange={(val) => handleChange(val.target.value, setConfirmPassword)}
        type="password"
      />
      {confirmPassword.length > 0 &&
        confirmPassword !== password &&
        'Your passwords do not match'}
    </div>
  );
};
