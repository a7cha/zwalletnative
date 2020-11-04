/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React,{Fragment} from 'react';
import {
  Text,
  View
} from 'react-native';
import Login from './src/auth/login/index'

const App = () => {
  return (
    <Fragment>
        <Login />
    </Fragment>
  );
};


export default App;
