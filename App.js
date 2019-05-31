import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, createDrawerNavigator, createBottomTabNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
// Later on in your component
import HomePage from './pages/home/home.page';
import LoginPage from './pages/login';

class DetailsScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button title="Go to Home Screeen" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <Text>Hello man</Text>
    )
  }
}

const Drawer = createDrawerNavigator({
  Sidebar: {
    screen: Sidebar
  },
  Home: {
    title: 'Home',
    screen: HomePage,
  },
  Details: {
    title: 'Details',
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home'
  });

const AppNavigator = createStackNavigator({
  Drawer: {
    screen: Drawer
  },
  Login: {
    screen: LoginPage
  }
}, {
    initialRouteName: 'Login',
    headerMode: "none"
  });

export default createAppContainer(AppNavigator);
