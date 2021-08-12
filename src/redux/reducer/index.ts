import {
  REGISTER,
  SET_USER,
  SET_ACCOUNT,
  LOG_OUT,
  FETCH_CVU,
  SET_TOKEN,
} from '../actions/index';

interface actionType {
  type: string;
  payload: Object;
}

const initialState = {
  account: {},
  user: {},
  token: '',
  cvuAsociate: false,
};

export default function rootReducer(state = initialState, action: actionType) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER:
      console.log('f', action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case SET_ACCOUNT:
      console.log('c', action.payload);
      return {
        ...state,
        account: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        account: action.payload,
        user: action.payload,
      };
    case FETCH_CVU:
      return {
        ...state,
        cvuAsociate: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}
