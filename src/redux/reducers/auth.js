const initialState = {
  user: [],
  isLogin: false,
  error: null,
  isExist: false,
  token: null,
  isVerify: false,
  number: null,
  codeSent: false,
  name: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VERIFY_OTP_SUCESS':
      return {
        ...state,
        isExist: action.payload.isExist === null ? false : true,
        isLogin: action.payload.isExist === null ? false : true,
        user: action.payload.isExist,
        name: action.payload.isExist.name,
        token: action.payload.token,
        isVerify: true,
        number: action.payload.to,
      };
    case 'VERIFY_OTP_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    case 'NEW_USER_SUCESS':
      return {
        ...state,
        user: action.payload.user,
        name: action.payload.user.name,
        isLogin: true,
        token: action.payload.token,
      };
    case 'CODE_SENT_SUCESS':
      return {
        ...state,
        codeSent: true,
      };
    case 'CODE_SENT_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    case 'NEW_USER_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        user: [],
        isLogin: false,
        error: null,
        isExist: false,
        token: null,
        isVerify: false,
        number: null,
        codeSent: false,
      };
    case 'LOGOUT_USER_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
