const initialState = {
  newbanks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_ALL':
      return {
        newbanks: action.payload,
      };
    case 'FILTER_AP':
      return {
        newbanks: action.payload,
      };
    case 'FILTER_AN':
      return {
        newbanks: action.payload,
      };
    case 'FILTER_ABP':
      return {
        newbanks: action.payload,
      };
    case 'FILTER_ABN':
      return {
        newbanks: action.payload,
      };
    case 'FILTER_BP':
      return {
        newbanks: action.payload,
      };
    case 'FILTER_BN':
      return {
        newbanks: action.payload,
      };
    case 'FILTER_OP':
      return {
        newbanks: action.payload,
      };
    case 'FILTER_ON':
    return {
      newbanks: action.payload,
    };
    default:
      return state;
  }
};
