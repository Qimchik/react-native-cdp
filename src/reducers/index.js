import { combineReducers } from 'redux';

import user from './user';
import courses from './courses';
import course from './course';

export default combineReducers({
  user,
  courses,
  course,
});
