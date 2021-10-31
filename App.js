// In App.js in a new project
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

console.disableYellowBox=true;

import AuthProvider from './src/contexts/auth';

import Routes from './src/routes/index';


export default function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
         <StatusBar backgroundColor="#131313" barStyle="light-content"/>
         <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}