import * as api from '../../api';
import { toast } from 'react-toastify';

export const getcode = number => async dispatch => {
  try {
    const { data } = await api.getcode(number);
    dispatch({ type: 'CODE_SENT_SUCESS', payload: data });
  } catch (error) {
    console.log(error);
    toast.error(`${error} Try Again`);
    dispatch({ type: 'CODE_SENT_FAILURE', payload: error });
  }
};

export const verifycode = ({ number, code }) => async dispatch => {
  try {
    const { data } = await api.verifycode({ number, code });
    dispatch({ type: 'VERIFY_OTP_SUCESS', payload: data });
  } catch (error) {
    toast.error(`${error} Retry`);
    dispatch({ type: 'VERIFY_OTP_FAILURE', payload: error });
    console.log(error);
  }
};

export const singup = ({ number, name, age, bgroup }) => async dispatch => {
  try {
    const { data } = await api.singup({ number, name, isverify: true });
    dispatch({ type: 'NEW_USER_SUCESS', payload: data });
  } catch (error) {
    toast.error(`${error}`);
    dispatch({ type: 'NEW_USER_FAILURE', payload: error });
    console.log(error);
  }
};

export const logOut = () => async dispatch => {
  try {
    dispatch({ type: 'LOGOUT_USER', payload: null });
    toast.info(`Logout Success`);
  } catch (error) {
    dispatch({ type: 'LOGOUT_USER_FAILURE', payload: error });
    console.log(error);
  }
};
