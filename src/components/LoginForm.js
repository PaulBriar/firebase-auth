import React from 'react';
import { View } from 'react-native';
import { Button, Card, Cardsection, CardSection } from './common';

class LoginForm extends React.Component {
  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;