import React,{useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import messaging from '@react-native-firebase/messaging';
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
import SplashScreen from 'react-native-splash-screen'



const Stack = createStackNavigator();

const Router = () => {
  const {isUser, isAdmin, isLogin} = useSelector((s)=> s.Auth)	
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  	 SplashScreen.hide()

    // Assume a message-notification contains a "type" property in the data payload of the screen to open

	    messaging().onNotificationOpenedApp(remoteMessage => {
	      console.log(
	        'Notification caused app to open from background state:',
	        remoteMessage.notification,
	      );
	      navigation.navigate(remoteMessage.data.type);
	    });

	    // Check whether an initial notification is available
	    messaging()
	      .getInitialNotification()
	      .then(remoteMessage => {
	        if (remoteMessage) {
	          console.log(
	            'Notification caused app to open from quit state:',
	            remoteMessage.notification,
	          );
	          setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
	        }
	        setLoading(false);
	      });
	  }, []);

	  if (loading) {
	    return null;
	  }
	return(
	<NavigationContainer>		
		<Stack.Navigator>
			{isUser  && isLogin? (

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