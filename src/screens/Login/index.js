import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Header from '../../components/Header';
import { login } from '../../actions/actions';

import styles from './styles';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  checkToken(token, navigation) {
    if (token) {
      navigation.replace('COURSES');
    }
  }

  componentDidMount() {
    const {
      token,
      navigation,
    } = this.props;
    this.checkToken(token, navigation);
  }

  componentDidUpdate() {
    const {
      token,
      navigation,
    } = this.props;
    this.checkToken(token, navigation);
  }

  render() {
    const {
      login: loginAction,
    } = this.props;
    const { username, password } = this.state;

    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text h2 style={styles.h2}>Log in</Text>
          <TextField
            label='Username'
            value={username}
            keyboardType="email-address"
            onChangeText={name => this.setState({ username: name })}
          />
          <TextField
            label='Password'
            secureTextEntry
            value={password}
            onChangeText={pass => this.setState({ password: pass })}
          />
        </View>
        <View style={styles.wrapperButton}>
          <Button
            style={styles.signInButton}
            onPress={() => loginAction(username, password)}
            title="Sign in"
          />
        </View>
      </View>
    );
  }
}

export default connect(
  state => ({token: state.user.token}),
  ({ login }),
)(Login);
