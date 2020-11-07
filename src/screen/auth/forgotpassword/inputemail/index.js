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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const FormForgotPassword = (props) => {

	const [email, setEmail]	= useState('');
	const [loading, setLoading] = useState(false);

	const toResetPassword = () => {
		props.navigation.navigate('ResetPassword');
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
							<Text style={styles.formTitle}>Reset Password</Text>
							<Text style={styles.formDesc}>Enter your Zwallet e-mail so we can send 	you a password reset link.</Text>
						</View>
				

						<View style={styles.positionCenter}>
							<View>

								<View>
																
								<TextInput 
									style={email != '' ? styles.formInputEmailFilled : styles.formInputEmail}
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

						<View style={styles.positionCenter}>
							<Button 
								style={email != '' ? styles.buttonSubmitFilled : styles.buttonSubmit}
								onPress={() => toResetPassword()}
							>
								<Text style={email != '' ? styles.textButtonLoginFilled : styles.textButtonLogin}>Confirm</Text>
							</Button>
						</View>						

					</View>
				</View>
			</ScrollView>
		</Fragment>
	)

}

export default FormForgotPassword
