import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import {Login, RegisterForm, RegisterPin} from '../screen'
import {isLogin} from '../utils'


const Stack = createStackNavigator();

const Router = () => {
	return(
	<NavigationContainer>		
		<Stack.Navigator initialRouteName="Login">

			<Stack.Screen 
				name='Login' 
				component={Login} 
				options={{ headerShown: false }}
			/>

			<Stack.Screen 
				name='RegisterForm' 
				component={RegisterForm} 
				options={{ headerShown: false }}
			/>

			<Stack.Screen 
				name='RegisterPin' 
				component={RegisterPin} 
				options={{ headerShown: false }}
			/>

		</Stack.Navigator>
    </NavigationContainer>	
	)
}

export default Router