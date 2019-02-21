import React from 'react';
import { Text, View } from 'react-native';

import Header from './components/Header';

const App = () => {
  return (
    <View>
      <Header headerText="Auth"/>
      <Text>App Component</Text>
    </View>
  );
};

export default App;
