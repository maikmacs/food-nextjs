const reducer = (
  state = {
    token: '',
    error: '',
    currentlySending: false,
    userProfile: {}
  },
  action
) => {
  switch (action.type) {
    case 'SET_AUTH':
      return { ...state, session: action.payload };
    case 'SET_USER':
      return { ...state, userProfile: action.payload };
    case 'SENDING_REQUEST':
      return { ...state, currentlySending: action.payload };
    default:
      return state;
  }
};

export default reducer;
