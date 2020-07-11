import React, {Component} from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import {
  createBottomTabNavigator,
  TabBarBottom,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MapScreen from './src/screens/MapScreen';
import DeckScreen from './src/screens/DeckScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import SettingScreen from './src/screens/SettingScreen';


// import { NavigationContainer } from '@react-navigation/native';
// import { navigationRef } from './RootNavigation';



const MainNavigator = createAppContainer(
  createBottomTabNavigator({
    Welcome: { screen: WelcomeScreen },
    Auth: { screen: AuthScreen },
    main: {
      screen: createBottomTabNavigator({
        Map: { screen: MapScreen },
        Deck: { screen: DeckScreen },
        review: {
          screen: createStackNavigator({
            Review: { screen: ReviewScreen },
            Settings: { screen: SettingScreen },
          }),
        },
      }),
    },
  })
);
 export default MainNavigator;



// class App extends Component {
//   render(){
//     return(
//       // <SafeAreaView>
//         <MainNavigator></MainNavigator>
//       // </SafeAreaView>
//     )
//   }
// }

// export default App;

/*
import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { createBottomTabNavigator, TabBarBottom, createAppContainer } from 'react-navigation';

import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen'; 

export default createAppContainer(createBottomTabNavigator(
  {
    Home: { screen: WelcomeScreen },
    Settings: { screen: AuthScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
));


*/
