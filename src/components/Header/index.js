import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';


class Header extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Courses</Text>
      </View>
    );
  }
}

export default Header;
