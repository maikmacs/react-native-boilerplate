import {INITIAL_STATE} from './initialState';
import {handleActions} from 'redux-actions';
import {SEND_REQUEST} from './constants';

export const sendRequest = (state, {payload}) => ({
  ...state,
  sending: payload,
});

export const authReducer = handleActions(
  {
    [SEND_REQUEST]: sendRequest,
  },
  INITIAL_STATE,
);
