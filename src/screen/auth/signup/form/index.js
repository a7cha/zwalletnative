import React,{useRef, useState, Fragment} from 'react'
import {
	ScrollView,
	View,
	TextInput,
	ToastAndroid,
	TouchableNativeFeedback
} from 'react-native'
import {Button, Text} from 'react-native-paper'	
import styles from './form.style.js'
import Icon from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux';
import {AuthRegister, CreatePin} from '../../../../redux/actions/Auth'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import axios from 'axios';
import {REACT_APP_API} from '../../../../../env.js'


const RegisterForm = (props) => {
	const inputPassword = useRef()
	const inputEmail = useRef()
	const [username, setUsername] = useState('');
	const [email, setEmail]	= useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [pincode, setPincode] = useState('');	
	const [gotoPin, setGotoPin] = useState(false)
	const [wrongData, setWrongData] = useState(false)
	const [wrongUsername, setWrongUsername] = useState(false)
	const [wrongEmail, setWrongEmail] = useState(false)
	const [wrongPassword, setWrongPassword] = useState(false)
	const [revealPassword, setRevealPassword] = useState(true)
	const dispatch = useDispatch()

	const createPin = () => {

		function validateEmail(email){
		        var re = /\S+@\S+\.\S+/;
		        return re.test(email);
		}		

		if(username != '' && validateEmail(email) && password.length >= 8 ){
			dispatch(AuthRegister({email : email, password : password, fullName : username}))
			console.log('berhasil login')
			setGotoPin(true)
		}

		if(username != '' && !validateEmail(email) && password.length >= 8 ){	
			ToastAndroid.show('Email is not email', ToastAndroid.SHORT)
			setWrongEmail(true)
		}

		if(username != '' && !validateEmail(email) && password.length < 7 ){	
			ToastAndroid.show('Password minimal 8 character', ToastAndroid.SHORT)
			setWrongPassword(true)
		}			
	};


	const textEmail = (email) => {
		setEmail(email)
		setWrongEmail(false)
	}

	const textPassword = (password) => {
		setPassword(password)
		setWrongPassword(false)
	}

	const textUsername = (username) => {
		setUsername(username)
		setWrongUsername(false)
	}


	

	const toPinStatus = () => {
		if(pincode.length == 6){
			let data = {
				email : email,
				pin : pincode
			}
			axios.patch(`${REACT_APP_API}/auth/create_pin`,data)
			.then(res => {
				props.navigation.push('PinStatus');
			}).catch(err => {
				console.log(err)
			})

			console.log('berasil')
		}else{
			ToastAndroid.show('All input must fillet', ToastAndroid.LONG)						
		}

	};


	const toLogin = () => {
		props.navigation.goBack('Login')
	}

	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>
				<View style={styles.positionCenter}>
					<View>
						<Text style={styles.zwalletIcon}> Zwallet</Text>
					</View>

					<View style={!gotoPin ? styles.formBoxRegister : styles.formBoxLogin}> 
					{ !gotoPin ? 
						(
							<>
								<View style={styles.positionCenter}>
									<Text style={styles.formTitle}>Sign Up</Text>
									<Text style={styles.formDesc}>Create your account to access Zwallet.</Text>
								</View>

								<View style={styles.positionCenter}>
									<View style={username != '' ? wrongUsername ? styles.borderInputFilledWrong : styles.borderInputFilled : styles.borderInput}>

										<View style={{flexDirection : 'row'}}>

										<Icon name='user' size={30} color={username != '' ? wrongUsername ? '#FF5B37'  : '#6379F4'  : 'rgba(169, 169, 169, 0.6)'} style={{top : 13}} />
																		
										<TextInput 
											style={styles.formInputEmail}
											placeholder='Masukkan Username'
											autoCapitalize={'none'}
											value={username}
											onChangeText={(text) => setUsername(text)}
											onSubmitEditing={() => inputEmail.current.focus()}
											returnKeyType="next"
										/>
										</View>
									</View>
								</View>						

								<View style={styles.positionCenter}>
									<View style={email != '' ? wrongEmail ? styles.borderInputFilledWrong :  styles.borderInputFilled : styles.borderInput}>

										<View style={{flexDirection : 'row'}}>

										<Icon name='mail' size={30} color={email != '' ? wrongEmail ? '#FF5B37'  : '#6379F4'  : 'rgba(169, 169, 169, 0.6)'} style={{top : 13}} />
																		
										<TextInput 
											ref={inputEmail}
											style={styles.formInputEmail}
											placeholder='Masukkan Email'
											autoCapitalize={'none'}
											value={email}
											onChangeText={(text) => textEmail(text)}
											onSubmitEditing={() => inputPassword.current.focus()}
											returnKeyType="next"
										/>
										</View>
									</View>
								</View>

								<View style={styles.positionCenter}>
									
									<View style={password != '' ? wrongPassword ? styles.borderInputPasswordFilledWrong : styles.borderInputPasswordFilled : styles.borderInputPassword}>
										<View style={{flexDirection : 'row'}}>
											<Icon name='lock' size={30} color={password != '' ? wrongPassword ? '#FF5B37'  : '#6379F4' : 'rgba(169, 169, 169, 0.6)'} style={{top : 10}}/>
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
												onSubmitEditing={() => createPin()}
											/>
											<TouchableNativeFeedback>
											<Icon name={!revealPassword ? 'eye-off' : 'eye'} size={30} color={'rgba(169, 169, 169, 0.6)'} style={{top : 10, right : 30}} onPress={() => setRevealPassword(!revealPassword)}/>
											</TouchableNativeFeedback>
										</View>
									</View>
									
								</View>		

								<View style={styles.positionCenter}>
									<Button 
										style={email && password && username != '' ? styles.buttonSubmitFilled : styles.buttonSubmit}
										onPress={() => createPin()}
									>
										<Text style={email && password && username != '' ? styles.textButtonLoginFilled : styles.textButtonLogin}> Sign Up</Text>
									</Button>
								</View>																
							</>								
						) 
						: 
						(
							<>

							<View style={styles.positionCenter}>
								<Text style={styles.formTitle}>Create Security PIN</Text>
								<Text style={styles.formDesc}>
									Create a PIN that’s contain 6 digits number for security purpose
									in Zwallet.
								</Text>
							</View>


							<View style={styles.pincodePosition}>
								<SmoothPinCodeInput
									codeLength={6}
									cellStyle={{
										borderWidth: 2,
										borderRadius: 10,
										borderColor: 'rgba(169, 169, 169, 0.6)',
									}}
									cellStyleFocused={{
										borderColor: '#6379F4',
									}}
									value={pincode}
									onTextChange={(code) => setPincode(code)}
									onSubmitEditing  ={() => toPinStatus()}
								/>								
								
							</View>

							<View style={styles.positionCenter}>
								<Button
									style={
										pincode.length == 6
											? styles.buttonSubmitFilled
											: styles.buttonSubmit
									}
									onPress={() => toPinStatus()}
								>
								<Text
									style={
										pincode.length == 6
											? styles.textButtonLoginFilled
											: styles.textButtonLogin
									}
								>
								Confirm
								</Text>
								</Button>
							</View>
							</>
						)

					}



				

						<View style={styles.col12}>
							<Text style={styles.textUnderButton}>Already have an account? Let’s </Text>
							<TouchableNativeFeedback onPress={() => toLogin()}>
								<Text style={styles.signUpButton}>
									Login
								</Text>
							</TouchableNativeFeedback>
						</View>
					</View>
				</View>
			</ScrollView>
		</Fragment>
	)

}

export default RegisterForm
