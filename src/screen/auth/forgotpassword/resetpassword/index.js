import React,{useRef, useState, Fragment} from 'react'
import {
	ScrollView,
	View,
	TextInput,
	ToastAndroid,
	TouchableNativeFeedback
} from 'react-native'
import {Button, Text} from 'react-native-paper'	
import styles from './resetpassword.style.js'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ResetPassword = (props) => {

	const inputConfirmPassword = useRef()
	const [password, setPassword] = useState('');	
	const [confirmPassword, setConfirmPassword] = useState('');	
	const [loading, setLoading] = useState(false);

	const toLogin = () => {
		props.navigation.navigate('Login');
	};

	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>
				<View style={styles.positionCenter}>
					<View>
						<Text style={styles.zwalletIcon}> Zwallet</Text>
					</View>
					<View style={styles.formBoxRegister}> 
						<View style={styles.positionCenter}>
							<Text style={styles.formTitle}>Reset Password</Text>
							<Text style={styles.formDesc}>Create and confirm your new password so you can login to Zwallet.</Text>
						</View>
				

						<View style={styles.positionCenter}>
							
							<TextInput 
								style={password != '' ? styles.formInputPasswordFilled : styles.formInputPassword}
								placeholder='Masukkan Password Baru'
								autoCapitalize={'none'}
								value={password}
								secureTextEntry={true}
								returnKeyType="send"
								returnKeyLabel="masuk"
								onChangeText={(text) => setPassword(text)}
								onSubmitEditing={() => inputConfirmPassword.current.focus()}
							/>
							
						</View>

						<View style={styles.positionCenter}>
							
							<TextInput 
								ref={inputConfirmPassword}
								style={confirmPassword != '' ? styles.formInputPasswordFilled : styles.formInputPassword}
								placeholder='Konfirmasi Password Baru'
								autoCapitalize={'none'}
								value={confirmPassword}
								secureTextEntry={true}
								returnKeyType="send"
								returnKeyLabel="masuk"
								onChangeText={(text) => setConfirmPassword(text)}
								onSubmitEditing={() => toLogin()}
							/>
							
						</View>						

						<View style={styles.positionCenter}>
							<Button 
								style={password == confirmPassword != '' ? styles.buttonSubmitFilled : styles.buttonSubmit}
								onPress={() => toLogin()}
							>
								<Text style={password == confirmPassword != '' ? styles.textButtonLoginFilled : styles.textButtonLogin}>Reset Password</Text>
							</Button>
						</View>						

					</View>
				</View>
			</ScrollView>
		</Fragment>
	)

}

export default ResetPassword
