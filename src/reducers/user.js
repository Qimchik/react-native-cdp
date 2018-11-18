const initialState = {
  token: '',
};

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'LOGIN_OK':
      return payload;
    default:
      return state;
  }
};
