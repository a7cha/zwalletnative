import React,{useRef, useState, Fragment, useEffect} from 'react'
import {
	ScrollView,
	View,
	TextInput,
	ToastAndroid,
	TouchableNativeFeedback
} from 'react-native'
import {Button, Text} from 'react-native-paper'	
import styles from './login.style.js'
import Icon from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux';
import {AuthLogin} from '../../../redux/actions/Auth'
import { NetworkInfo } from "react-native-network-info";
import messaging from '@react-native-firebase/messaging';
import {getDeviceToken} from '../../../redux/actions/User'


const Login = (props) => {
	const { isLogin, error, isAdmin, isUser } = useSelector(state => state.Auth)	
	const inputPassword = useRef()
	const [email, setEmail]	= useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [revealPassword, setRevealPassword] = useState(true)
	const [wrongData, setWrongData] = useState(false)
	const [success, setSuccess] = useState(false)
	const dispatch = useDispatch()



	const toRegister = () => {
		props.navigation.navigate('RegisterForm')
	}

	const toForgotPassword = () => {
		props.navigation.navigate('FormForgotPassword')
	}

	


	NetworkInfo.getIPAddress().then(ipAddress => {
	  console.log('ini api',ipAddress);
	});

	
	useEffect(() => {
	     messaging()
	     	.getToken()
	     	.then(devtoken => {
	     		console.log(devtoken, 'ini devtoken')
				dispatch(getDeviceToken(devtoken))	
	     })		
		return () => {
			
		};
	}, [])

	const {deviceToken} = useSelector((s) => s.User)

	console.log('                ini device token        login            ' , deviceToken)


	const onSubmit = () => {
		setLoading(true);
		
		dispatch(AuthLogin({email: email, password: password, devtoken : deviceToken}))
		.then((res) => {
		       if(!isUser) {
		           ToastAndroid.show('Wrong email or password', ToastAndroid.SHORT)
		       }    					

		       if(isAdmin) {
		           ToastAndroid.show('youare an admin', ToastAndroid.SHORT)
		       }						
		}).catch(err => {
	
		})        
	};		


	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>
				<View style={styles.positionCenter}>
					<View>
						<Text style={styles.zwalletIcon}> Zwallet</Text>
					</View>
					<View style={styles.formBoxLogin}> 
						<View style={styles.positionCenter}>
							<Text style={styles.formTitle}>Login</Text>
							<Text style={styles.formDesc}>Login to your existing account to access all the features in Zwallet.</Text>
						</View>
						<View style={styles.positionCenter}>
							<View style={email != '' ? styles.borderInputFilled : styles.borderInput}>

								<View style={{flexDirection : 'row'}}>

								<Icon name='mail' size={30} color={email != '' ? wrongData ? '#FF5B37'  : '#6379F4'  : 'rgba(169, 169, 169, 0.6)'} style={{top : 13}} />
																
								<TextInput 
									style={styles.formInputEmail}
									placeholder='Masukkan Email'
									autoCapitalize={'none'}
									value={email}
									onChangeText={(text) => setEmail(text)}
									onSubmitEditing={() => inputPassword.current.focus()}
									returnKeyType="next"
								/>
								</View>
							</View>
						</View>
						<View style={styles.positionCenter}>
							
							<View style={password != '' ? styles.borderInputPasswordFilled : styles.borderInputPassword}>
								<View style={{flexDirection : 'row'}}>
									<Icon name='lock' size={30} color={password != '' ? wrongData ? '#FF5B37'  : '#6379F4' : 'rgba(169, 169, 169, 0.6)'} style={{top : 10}}/>
									<TextInput 
										ref={inputPassword}
										style={styles.formInputPassword}
										placeholder='Masukkan Password'
										autoCapitalize={'none'}
										value={password}
										secureTextEntry={revealPassword}
										returnKeyType="send"
										returnKeyLabel="masuk"
										onChangeText={(text) => setPassword(text)}
										onSubmitEditing={() => onSubmit()}
									/>
									<TouchableNativeFeedback>
									<Icon name={!revealPassword ? 'eye-off' : 'eye'} size={30} color={'rgba(169, 169, 169, 0.6)'} style={{top : 10}} onPress={() => setRevealPassword(!revealPassword)}/>
									</TouchableNativeFeedback>
								</View>
							</View>
						</View>

							


						<View style={styles.positionEnd}>
							<TouchableNativeFeedback onPress={() => toForgotPassword()}>
								<Text style={styles.forgotPassword}>Forgot password?</Text>
							</TouchableNativeFeedback>
						</View>

						<View style={styles.positionCenter}>
							<Button style={email && password != '' ? styles.buttonSubmitFilled : styles.buttonSubmit}>
								<Text style={email && password != '' ? styles.textButtonLoginFilled : styles.textButtonLogin}> Login</Text>
							</Button>
						</View>						

						<View style={styles.col12}>
							<Text style={styles.textUnderButton}>Don’t have an account? Let’s </Text>
							<TouchableNativeFeedback onPress={() => toRegister()}>
								<Text style={styles.signUpButton}>
									Sign Up
								</Text>
							</TouchableNativeFeedback>
						</View>
					</View>
				</View>
			</ScrollView>
		</Fragment>
	)

}

export default Login
