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
	const [newPassword, setNewPassword] = useState('')
	const [repeatNewPassword, setRepeatNewPassword] = useState('')

	const dispatch = useDispatch()

	const toResetPassword = () => {
		setResetPassword(true)
	};

	const doResetPassword = () => {

		dispatch(ResetPassword({email : email, password : newPassword}))
		.then(res => {
			props.navigation.navigate('Login')	
		})
		.catch(error => {
			ToastAndroid.show('Email not found', ToastAndroid.SHORT)
		})
		
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
									
									<View style={repeatNewPassword != '' ? styles.borderInputPasswordFilled : styles.borderInputPassword}>
										<View style={{flexDirection : 'row'}}>
											<Icon name='lock' size={30} color={repeatNewPassword != '' ? '#6379F4' : 'rgba(169, 169, 169, 0.6)'} style={{top : 10,}}/>
											<TextInput 
												ref={inputNewPassword}
												style={styles.formInputPassword}
												placeholder='Confirm New Password'
												autoCapitalize={'none'}
												value={repeatNewPassword}
												secureTextEntry={revealPassword}
												returnKeyType="send"
												returnKeyLabel="masuk"
												onChangeText={(text) => setRepeatNewPassword(text)}
												onSubmitEditing={() => doResetPassword()}
											/>
											<TouchableNativeFeedback>
											<Icon name={!revealPassword ? 'eye-off' : 'eye'} size={30} color={'rgba(169, 169, 169, 0.6)'} style={{top : 10, right : 30}} onPress={() => setRevealPassword(!revealPassword)}/>
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
									<View style={email != '' ? styles.borderInputFilled : styles.borderInput}>

										<View style={{flexDirection : 'row'}}>

										<Icon name='mail' size={30} color={email != '' ? '#6379F4'  : 'rgba(169, 169, 169, 0.6)'} style={{top : 13}} />
																		
										<TextInput 
											style={styles.formInputEmail}
											placeholder='Masukkan Email'
											autoCapitalize={'none'}
											value={email}
											onChangeText={(text) => setEmail(text)}
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
