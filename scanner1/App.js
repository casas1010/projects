import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

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
    RouteNameOne: App,
  },
  {
    // headerTransitionPreset: 'uikit',
    // mode: 'modal',
  }
);

export default App;
