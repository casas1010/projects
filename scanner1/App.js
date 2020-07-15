import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Scanner from './screens/Scanner';

class App extends React.Component {

  
    
  


  render() {
    
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'teal',
        }}>
        <Text>Welcome </Text>
      </View>
    );
  }
}

const MyNavigator = createStackNavigator(
  {
    // App,
    Scanner

  },
  {
    // headerTransitionPreset: 'uikit',
    // mode: 'modal',
  }
);

export default MyNavigator;
