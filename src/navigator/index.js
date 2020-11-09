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
			TransactionHistory,
			SearchTransfer,
			AmountBank,
			ConfirmTransfer,
			PinTransfer,
			TransferStatus,
			Topup,
			Notification,
			ProfileMenu,
			PersonalInformation,
			ChangePassword
		} from '../screen'
import {isLogin} from '../utils'
import {useSelector} from 'react-redux'


const Stack = createStackNavigator();

const Router = () => {
  const Auth = useSelector((s)=> s.Auth)	
	return(
	<NavigationContainer>		
		<Stack.Navigator>
			{Auth.data.token ? (

			<Stack.Screen 
				name='UserDashboard' 
				component={UserDashboard} 
				options={{ headerShown: false }}
			/>
			
			): (

			<Stack.Screen 
				name='Login' 
				component={Login} 
				options={{ headerShown: false }}
			/>			

			)
			}


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
				name='TransactionHistory' 
				component={TransactionHistory} 
				options={{ headerShown: false }}
			/>

			<Stack.Screen 
				name='SearchTransfer' 
				component={SearchTransfer} 
				options={{ headerShown: false }}
			/>

			<Stack.Screen 
				name='AmountBank' 
				component={AmountBank} 
				options={{ headerShown: false }}
			/>									

			<Stack.Screen 
				name='ConfirmTransfer' 
				component={ConfirmTransfer} 
				options={{ headerShown: false }}
			/>			

			<Stack.Screen 
				name='PinTransfer' 
				component={PinTransfer} 
				options={{ headerShown: false }}
			/>			

			<Stack.Screen 
				name='TransferStatus' 
				component={TransferStatus} 
				options={{ headerShown: false }}
			/>

			<Stack.Screen 
				name='Topup' 
				component={Topup} 
				options={{ headerShown: false }}
			/>

			<Stack.Screen 
				name='Notification' 
				component={Notification} 
				options={{ headerShown: false }}
			/>											

			<Stack.Screen 
				name='ProfileMenu' 
				component={ProfileMenu} 
				options={{ headerShown: false }}
			/>			

			<Stack.Screen 
				name='PersonalInformation' 
				component={PersonalInformation} 
				options={{ headerShown: false }}
			/>
			
			<Stack.Screen 
				name='ChangePassword' 
				component={ChangePassword} 
				options={{ headerShown: false }}
			/>						

		</Stack.Navigator>
    </NavigationContainer>	
	)
}

export default Router