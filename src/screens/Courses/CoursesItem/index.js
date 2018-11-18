import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

const OrderListItem = ({course, openCourse}) => (
  <TouchableOpacity
    onPress={() => openCourse(course)}
    style={[styles.container]}
  >
    <View>
      <View style={[styles.customerId, styles.section]}>
        <Text style={[styles.rowCustomer, styles.rowTitle]}>name</Text>
        <Text style={styles.rowCustomer}>{course.name}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.rowText}>
          <Text style={styles.rowTitle}>descrition:</Text>
          {' '}
          {course.descrition}
        </Text>
        <Text style={styles.rowText}>
          <Text style={styles.rowTitle}>Time: </Text>
          {course.date}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default OrderListItem;
