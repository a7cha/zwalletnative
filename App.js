/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react';
import {
  Text,
  View
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import AuthRouter from './src/navigator'
import { Provider as PaperProvider  } from 'react-native-paper'


const App = () => {
  return (
    <PaperProvider>
        <AuthRouter />
    </PaperProvider>
  );
};


export default App;
