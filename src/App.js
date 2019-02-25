import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import {
  Header,
  Button,
  Spinner,
  CardSection
} from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAZebFZNjigwMe4BNepO4TybqaKgg6m3Qg',
      authDomain: 'auth-57112.firebaseapp.com',
      databaseURL: 'https://auth-57112.firebaseio.com',
      projectId: 'auth-57112',
      storageBucket: 'auth-57112.appspot.com',
      messagingSenderId: '1063570273704'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    const { loggedIn } = this.state;

    switch (loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View>
            <Spinner size="large" />
          </View>
        );
    }
  };

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
