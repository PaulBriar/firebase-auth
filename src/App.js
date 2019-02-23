import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { LoginForm } from './components/LoginForm';


const App = () => {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAZebFZNjigwMe4BNepO4TybqaKgg6m3Qg",
      authDomain: "auth-57112.firebaseapp.com",
      databaseURL: "https://auth-57112.firebaseio.com",
      projectId: "auth-57112",
      storageBucket: "auth-57112.appspot.com",
      messagingSenderId: "1063570273704"
    });
  }

  return (
    <View>
      <Header headerText="Auth" />
      <LoginForm />
    </View>
  );
};

export default App;
