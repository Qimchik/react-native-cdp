import { createStackNavigator, createAppContainer  } from 'react-navigation';
import Login from '../screens/Login';
import Courses from '../screens/Courses';
import Course from '../screens/Course';

const screens = {
  'LOGIN': {
    screen: Login,
  },
  'COURSES': {
    screen: Courses,
  },
  'COURSE': {
    screen: Course,
  },
};

const AppNavigator =  createStackNavigator(screens, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
});

export default createAppContainer(AppNavigator);
