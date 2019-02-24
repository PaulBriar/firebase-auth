import React from 'react';
import {
  Button,
  Card,
  CardSection,
  Input
} from './common';

class LoginForm extends React.Component {
  state = { email: '', password: '' };

  render() {
    const { email, password } = this.state;
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
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
