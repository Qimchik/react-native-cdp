const initialState = [];

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'GET_COURSES_OK':
      return payload.courses;
    default:
      return state;
  }
};
