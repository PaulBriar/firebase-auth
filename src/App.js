import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';


class App extends React.Component {
  state = { loggedIn: false };

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
      return user ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false });
    });
  }

  renderContent = () => {
    const { loggedIn } = this.state;

    if (loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }
    return <LoginForm />;
  }

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
