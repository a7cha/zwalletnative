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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const RegisterForm = (props) => {
	const inputPassword = useRef()
	const inputEmail = useRef()
	const [username, setUsername] = useState('');
	const [email, setEmail]	= useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

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
							<View>

								<View>
																
								<TextInput 
									style={username != '' ? styles.formInputUsernameFilled : styles.formInputUsername}
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
							<View>

								<View>
																
								<TextInput 
									ref={inputEmail}
									style={email != '' ? styles.formInputEmailFilled : styles.formInputEmail}
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
							
							<TextInput 
								ref={inputPassword}
								style={password != '' ? styles.formInputPasswordFilled : styles.formInputPassword}
								placeholder='Masukkan Password'
								autoCapitalize={'none'}
								value={password}
								secureTextEntry={true}
								returnKeyType="send"
								returnKeyLabel="masuk"
								onChangeText={(text) => setPassword(text)}
								onSubmitEditing={() => createPin()}
							/>
							
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
