import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { 	Login, 
			RegisterForm, 
			RegisterPin, 
			PinStatus, 
			FormForgotPassword,
			ResetPassword,
			UserDashboard,
			TransactionHistory	} 
				from '../screen'
import {isLogin} from '../utils'


const Stack = createStackNavigator();

const Router = () => {
	return(
	<NavigationContainer>		
		<Stack.Navigator initialRouteName="UserDashboard">

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

			<Stack.Screen 
				name='PinStatus' 
				component={PinStatus} 
				options={{ headerShown: false }}
			/>

			<Stack.Screen 
				name='FormForgotPassword' 
				component={FormForgotPassword} 
				options={{ headerShown: false }}
			/>

			<Stack.Screen 
				name='ResetPassword' 
				component={ResetPassword} 
				options={{ headerShown: false }}
			/>

			<Stack.Screen 
				name='UserDashboard' 
				component={UserDashboard} 
				options={{ headerShown: false }}
			/>

			<Stack.Screen 
				name='TransactionHistory' 
				component={TransactionHistory} 
				options={{ headerShown: false }}
			/>

		</Stack.Navigator>
    </NavigationContainer>	
	)
}

export default Router