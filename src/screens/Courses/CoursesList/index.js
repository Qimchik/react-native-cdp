import React from 'react';
import { View } from 'react-native';

import CoursesItem from '../CoursesItem';

import styles from './styles';

const CoursesList = ({ courses, openCourse }) => (
  <View style={styles.container}>
    {courses && courses.length && courses.map(item => (
      <CoursesItem
        key={item.id}
        course={item}
        openCourse={openCourse}
      />
    )) || null}
  </View>
);

export default CoursesList;
