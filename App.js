import * as React from 'react';
import {View} from 'react-native';
import { createSwitchNavigator,createAppContainer } from 'react-navigation';
import DrawerNavigator from './Navigator/DrawerNavigator';
import DashboardScreen from './screens/DashboardScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import firebase from 'firebase';
import {firebaseConfig} from './config.js';

export default function App(){
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }else{
    firebase.app();
  }
     return(
    <View>
      <AppContainer/>
      </View>
     )
}


const TabNavigator=createSwitchNavigator({
  Loading:LoadingScreen,
  LoginScreen:LoginScreen,
  DashboardScreen:DashboardScreen
})
const AppContainer=createAppContainer(TabNavigator)