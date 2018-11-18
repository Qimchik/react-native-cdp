const initialState = {};

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'SET_COURSE':
      return payload;
    default:
      return state;
  }
};
