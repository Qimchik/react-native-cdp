import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, ScrollView, RefreshControl } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Header from '../../components/Header';
import CoursesList from './CoursesList';
import { getCourses, setCourse } from '../../actions/actions';

import styles from './styles';

class Courses extends React.Component {
  state = {
    refreshing: false,
  };

  componentDidMount() {
    if (this.props.token) {
      this.props.getCourses(this.props.token);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView
          refreshControl={(
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.props.getCourses(this.props.token)}
            />
          )}
        >
          <CoursesList
            courses={this.props.courses}
            openCourse={(course) => {
              this.props.setCourse(course);
              this.props.navigation.replace('COURSE');
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  state => ({token: state.user.token, courses: state.courses}),
  ({ getCourses, setCourse }),
)(Courses);
