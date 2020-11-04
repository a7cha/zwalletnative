import React,{useRef, useState, Fragment} from 'react'
import {
	ScrollView,
	View,
	TextInput,
	ToastAndroid
} from 'react-native'
import {Button, Text} from 'react-native-paper'	
import styles from './login.style.js'

const Login = (props) => {
	const inputPassword = useRef()
	const [email, setEmail]	= useState(null);
	const [password, setPassword] = useState(null);
	const [loading, setLoading] = useState(false);

	const onSubmit = () => {
		props.navigation.navigate('Home');

	};

	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>
				<View style={styles.positionCenter}>
					<View>
						<Text style={styles.zwalletIcon}> Zwallet</Text>
					</View>
					<View style={styles.formBox}> 
						<View style={styles.positionCenter}>
							<Text style={styles.formTitle}>Login</Text>
							<Text style={styles.formDesc}>Login to your existing account to access all the features in Zwallet.</Text>
						</View>
						<View style={styles.positionCenter}>
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
						<View style={styles.positionCenter}>
							<TextInput 
								ref={inputPassword}
								style={styles.formInputPassword}
								placeholder='Masukkan Password'
								autoCapitalize={'none'}
								value={password}
								secureTextEntry={true}
								returnKeyType="send"
								returnKeyLabel="masuk"
								onChangeText={(text) => setPassword(text)}
								onSubmitEditing={() => onSubmit()}
							/>
							
						</View>
						<View>
							<Text>Forgot password?</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</Fragment>
	)

}

export default Login
