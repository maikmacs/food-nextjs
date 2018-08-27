import {
  SET_AUTH,
  SET_USER,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR
} from '../constants/auth';

const initialState = {
  token: '',
  error: '',
  currentlySending: false,
  userProfile: {}
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, token: action.payload };
    case SET_USER:
      return { ...state, userProfile: action.payload };
    case SENDING_REQUEST:
      return { ...state, currentlySending: action.sending };
    case REQUEST_ERROR:
      return { ...state, error: action.error };
    case CLEAR_ERROR:
      return { ...state, error: '' };
    default:
      return state;
  }
}
