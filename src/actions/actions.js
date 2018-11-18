import { CALL_API } from 'redux-api-middleware';

export const login = (username, password) => async (dispatch) => {
  await dispatch({
    [CALL_API]: {
      types: [
        'LOGIN_REQUEST',
        'LOGIN_OK',
        'LOGIN_ERROR',
      ],
      endpoint: `/login?username=${username}&password=${password}`,
      method: 'POST'
    },
  });
}

export const getCourses = (token) => async (dispatch) => {
  await dispatch({
    [CALL_API]: {
      types: [
        'GET_COURSES_REQUEST',
        'GET_COURSES_OK',
        'GET_COURSES_ERROR',
      ],
      endpoint: `/courses?token=${token}`,
      method: 'GET'
    },
  });
}

export const setCourse = (course) => (dispatch) => {
  return dispatch({type: 'SET_COURSE', payload: course});
};

export const save = (course) => (dispatch) => {
  const {id, name, time, descrition, date} = course;
  dispatch({
    [CALL_API]: {
      types: [
        'SAVE_REQUEST',
        'SAVE_OK',
        'SAVE_ERROR',
      ],
      endpoint: `/save?id=${id}&name=${name}&time=${time}&descrition=${descrition}&date=${date}`,
      method: 'POST'
    },
  });
};

export const remove = (course) => (dispatch) => {
  const {id} = course;
  dispatch({
    [CALL_API]: {
      types: [
        'REMOVE_REQUEST',
        'REMOVE_OK',
        'REMOVE_ERROR',
      ],
      endpoint: `/delete/${id}`,
      method: 'GET'
    },
  });
};
