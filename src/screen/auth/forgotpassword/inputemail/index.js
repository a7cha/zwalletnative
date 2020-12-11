import React,{useRef, useState, Fragment} from 'react'
import {
	ScrollView,
	View,
	TextInput,
	ToastAndroid,
	TouchableNativeFeedback
} from 'react-native'
import {Button, Text} from 'react-native-paper'	
import styles from './inputemail.style.js'
import Icon from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux';
import {ResetPassword} from '../../../../redux/actions/Auth'

const FormForgotPassword = (props) => {

	const inputNewPassword = useRef()
	const [email, setEmail]	= useState('');
	const [loading, setLoading] = useState(false);
	const[resetPassword, setResetPassword] = useState(false)
	const [revealPassword, setRevealPassword] = useState(true)
	const [revealNewPassword, setRevealNewPassword] = useState(true)
	const [wrongEmail, setWrongEmail] = useState(false)
	const [wrongPassword, setWrongPassword] = useState(false)
	const [newPassword, setNewPassword] = useState('')
	const [repeatNewPassword, setRepeatNewPassword] = useState('')


	const dispatch = useDispatch()
	const {data} = useSelector(s => s.Auth)

	const toResetPassword = () => {
		setResetPassword(true)
	};

	const inputEmail = (text) => {
		setEmail(text)
		setWrongEmail(false)
	}

	const inputPassword = (password) => {
		setRepeatNewPassword(password)
		setWrongPassword(false)
	}

	const doResetPassword = () => {

		if(newPassword === repeatNewPassword){
			dispatch(ResetPassword({email : email, password : newPassword}))
			.then(res => {
				

				if(data.message === 'Succes'){
					ToastAndroid.show('Password Successfully changed', ToastAndroid.SHORT)					
					props.navigation.goBack('Login')
				}



				if(data === 'Request failed with status code 403'){
					ToastAndroid.show('Email not found', ToastAndroid.SHORT)	
					setResetPassword(false)
					setWrongEmail(true)
				}

				
			})
			.catch(error => {
				ToastAndroid.show(error, ToastAndroid.SHORT)
			})
		} else {
			ToastAndroid.show('Confirm Password and password not same', ToastAndroid.SHORT)		
			setWrongPassword(true)			
		}


		
	}

	const toLogin = () => {
		props.navigation.navigate('Login')
	}

	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>
				<View style={styles.positionCenter}>
					<View>
						<Text style={styles.zwalletIcon}> Zwallet</Text>
					</View>
					<View style={styles.formBoxRegister}> 
						{ resetPassword ? 
							(
								<>
								<View style={styles.positionCenter}>
									<Text style={styles.formTitle}>Reset Password</Text>
									<Text style={styles.formDesc}>Create and confirm your new password so you can login to Zwallet.</Text>
								</View>			


								<View style={styles.positionCenter}>
									
									<View style={newPassword != '' ? styles.borderInputPasswordFilled : styles.borderInputPassword}>
										<View style={{flexDirection : 'row'}}>
											<Icon name='lock' size={30} color={newPassword != '' ?  '#6379F4' : 'rgba(169, 169, 169, 0.6)'} style={{top : 10}}/>
											<TextInput 
												style={styles.formInputPassword}
												placeholder='Create New Password'
												autoCapitalize={'none'}
												value={newPassword}
												secureTextEntry={revealPassword}
												returnKeyType="send"
												returnKeyLabel="masuk"
												onChangeText={(text) => setNewPassword(text)}
												onSubmitEditing={() => inputNewPassword.current.focus()}
											/>
											<TouchableNativeFeedback>
											<Icon name={!revealPassword ? 'eye-off' : 'eye'} size={30} color={'rgba(169, 169, 169, 0.6)'} style={{top : 10, right : 30}} onPress={() => setRevealPassword(!revealPassword)}/>
											</TouchableNativeFeedback>
										</View>
									</View>
								</View>		

								<View style={styles.positionCenterRepeat}>
									
									<View style={repeatNewPassword != '' ? wrongPassword ? styles.borderInputPasswordFilledWrong : styles.borderInputPasswordFilled : styles.borderInputPassword}>
										<View style={{flexDirection : 'row'}}>
											<Icon name='lock' size={30} color={repeatNewPassword != '' ? wrongPassword ? '#FF5B37'  :  '#6379F4' : 'rgba(169, 169, 169, 0.6)'} style={{top : 10,}}/>
											<TextInput 
												ref={inputNewPassword}
												style={styles.formInputPassword}
												placeholder='Confirm New Password'
												autoCapitalize={'none'}
												value={repeatNewPassword}
												secureTextEntry={revealNewPassword}
												returnKeyType="send"
												returnKeyLabel="masuk"
												onChangeText={(text) => inputPassword(text)}
												onSubmitEditing={() => doResetPassword()}
											/>
											<TouchableNativeFeedback>
											<Icon name={!revealNewPassword ? 'eye-off' : 'eye'} size={30} color={'rgba(169, 169, 169, 0.6)'} style={{top : 10, right : 30}} onPress={() => setRevealNewPassword(!revealNewPassword)}/>
											</TouchableNativeFeedback>
										</View>
									</View>
								</View>												



								<View style={styles.positionCenter}>
									<Button 
										disabled={newPassword && repeatNewPassword != '' ? false : true}
										style={newPassword && repeatNewPassword != '' ? styles.buttonSubmitFilled : styles.buttonSubmit}
										onPress={() => doResetPassword()}
									>
										<Text style={newPassword && repeatNewPassword != '' ? styles.textButtonLoginFilled : styles.textButtonLogin}>Reset Password</Text>
									</Button>
								</View>	
								</>
							)
							:
							(
								<>
								<View style={styles.positionCenter}>
									<Text style={styles.formTitle}>Reset Password</Text>
									<Text style={styles.formDesc}>Enter your Zwallet e-mail so we can send 	you a password reset link.</Text>
								</View>			


								<View style={styles.positionCenter}>
									<View style={email != '' ? wrongEmail ? styles.borderInputFilledWrong  : styles.borderInputFilled : styles.borderInput}>

										<View style={{flexDirection : 'row'}}>

										<Icon name='mail' size={30} color={email != '' ? wrongEmail ?  '#FF5B37' : '#6379F4'  : 'rgba(169, 169, 169, 0.6)'} style={{top : 13}} />
																		
										<TextInput 
											style={styles.formInputEmail}
											placeholder='Masukkan Email'
											autoCapitalize={'none'}
											value={email}
											onChangeText={(text) => inputEmail(text)}
											onSubmitEditing={() => toResetPassword()}
											returnKeyType="next"
										/>
										</View>
									</View>
								</View>						



								<View style={styles.positionCenterButtonEmail}>
									<Button 
										disabled={email == '' ? true : false}
										style={email != '' ? styles.buttonSubmitFilledEmail : styles.buttonSubmitEmail}
										onPress={() => toResetPassword()}
									>
										<Text style={email != '' ? styles.textButtonLoginFilled : styles.textButtonLogin}>Confirm</Text>
									</Button>
								</View>	
								</>
							)

						}
					

					</View>
				</View>
			</ScrollView>
		</Fragment>
	)

}

export default FormForgotPassword
