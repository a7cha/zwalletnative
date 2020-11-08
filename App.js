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
import Router from './src/navigator'
import { Provider } from 'react-redux';
import configureStore from './src/redux/store'
import { DefaultTheme,Provider as PaperProvider  } from 'react-native-paper'
import {PersistGate} from 'redux-persist/integration/react'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: '#FAFCFF',
  },
};

const App = () => {
  const { store, persistor } = configureStore();
  return (
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
            <Router />
        </PaperProvider>
      </PersistGate>
    </Provider>    
  );
};


export default App;
