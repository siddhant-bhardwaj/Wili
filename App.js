import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransationScreen from './screens/BookTransationScreen';
import SearchScreen from './screens/SearchScreen';
import {createAppContainer} from 'react-navigation'
import {createBottomTagNavigator} from 'rect-navigation-tabs';


export default class App extends React.Component{
  render(){
  return (
    <AppContainer/>

  );
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

const TabNavigator=createBottomTagNavigator({
  Transation:{screen:BookTransationScreen},
  Search:{screen:SearchScreen}
});

const AppContainer=createAppContainer(TabNavigator);
