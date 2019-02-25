import React from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import {
  Button,
  Card,
  CardSection,
  Input,
  Spinner
} from './common';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(() => {
            this.onLoginFail();
          });
      });
  }

  onLoginFail = () => {
    this.setState({ error: 'Authentication Failed.', loading: false });
  }

  onLoginSuccess = () => {
    this.setState({
      error: '',
      loading: false,
      email: '',
      password: ''
    });
  }

  renderButton = () => {
    const { loading } = this.state;

    if (loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress}>
        Log In
      </Button>
    );
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={email}
            onChangeText={text => this.setState({ email: text })}
            placeholder="your@email.com"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            value={password}
            onChangeText={text => this.setState({ password: text })}
            placeholder="password"
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
