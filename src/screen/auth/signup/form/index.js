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

const RegisterForm = (props) => {
	const inputPassword = useRef()
	const inputEmail = useRef()
	const [username, setUsername] = useState('');
	const [email, setEmail]	= useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [wrongData, setWrongData] = useState(false)
	const [revealPassword, setRevealPassword] = useState(true)

	const createPin = () => {
		props.navigation.navigate('RegisterPin');
	};

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
						<View style={styles.positionCenter}>
							<Text style={styles.formTitle}>Sign Up</Text>
							<Text style={styles.formDesc}>Create your account to access Zwallet.</Text>
						</View>

						<View style={styles.positionCenter}>
							<View style={email != '' ? styles.borderInputFilled : styles.borderInput}>

								<View style={{flexDirection : 'row'}}>

								<Icon name='user' size={30} color={username != '' ? wrongData ? '#FF5B37'  : '#6379F4'  : 'rgba(169, 169, 169, 0.6)'} style={{top : 13}} />
																
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
							<View style={email != '' ? styles.borderInputFilled : styles.borderInput}>

								<View style={{flexDirection : 'row'}}>

								<Icon name='mail' size={30} color={email != '' ? wrongData ? '#FF5B37'  : '#6379F4'  : 'rgba(169, 169, 169, 0.6)'} style={{top : 13}} />
																
								<TextInput 
									ref={inputEmail}
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
										onSubmitEditing={() => createPin()}
									/>
									<TouchableNativeFeedback>
									<Icon name={!revealPassword ? 'eye-off' : 'eye'} size={30} color={'rgba(169, 169, 169, 0.6)'} style={{top : 10}} onPress={() => setRevealPassword(!revealPassword)}/>
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
