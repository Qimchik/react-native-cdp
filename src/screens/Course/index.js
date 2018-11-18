import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Header from '../../components/Header';
import { save, remove } from '../../actions/actions';

import styles from './styles';

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      time: '',
      descrition: '',
      date: '',
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.course.id,
      name: this.props.course.name,
      time: this.props.course.time,
      descrition: this.props.course.descrition,
      date: this.props.course.date,
    })
  }

  render() {
    const { id, name, time, descrition, date } = this.state;

    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text h2 style={styles.h2}>Log in</Text>
          <TextField
            label='Name'
            defaultValue={name}
            onChangeText={name => this.setState({ name })}
          />
          <TextField
            label='Time'
            defaultValue={time}
            onChangeText={time => this.setState({ time })}
          />
          <TextField
            label='Descrition'
            defaultValue={descrition}
            onChangeText={descrition => this.setState({ descrition })}
          />
          <TextField
            label='Date'
            defaultValue={date}
            onChangeText={date => this.setState({ date })}
          />
        </View>
        <View style={styles.wrapperButton}>
          <Button
            style={styles.signInButton}
            onPress={() => {
              this.props.save({ id, name, time, descrition, date });
              this.props.navigation.replace('COURSES');
            }}
            title="Save"
          />
          <Button
            style={[styles.signInButton, styles.redButton]}
            onPress={() =>{
               this.props.remove({ id });
               this.props.navigation.replace('COURSES')
             }}
            title="Remove"
          />
        </View>
      </View>
    );
  }
}

export default connect(
  state => ({token: state.user.token, course: state.course}),
  ({ save, remove }),
)(Course);
