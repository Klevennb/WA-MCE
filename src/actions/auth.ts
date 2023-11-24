import { Credentials } from 'components/Auth/Auth.types';

export const loginUser = (payload: Credentials) => ({
  type: 'LOGIN',
  payload,
});

export const registerUser = (payload: Credentials) => ({
  type: 'REGISTER',
  payload,
});
