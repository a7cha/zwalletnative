import React,{useRef, useState, Fragment} from 'react'
import {
	ScrollView,
	View,
	TextInput,
	ToastAndroid,
	TouchableNativeFeedback
} from 'react-native'
import {Button, Text} from 'react-native-paper'	
import styles from './changepassword.style.js'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {MobileNav} from '../../../../components'

const ChangePassword = (props) => {
	const inputNewPassword = useRef()
	const inputRepeatPassword = useRef()
	const [email, setEmail]	= useState('');
	const [loading, setLoading] = useState(false);
	const [currentPassword, setCurrentPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')

	const toResetPassword = () => {
		props.navigation.navigate('ProfileMenu');
	};

	const toLogin = () => {
		props.navigation.navigate('Login')
	}

	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>
					<MobileNav thisnavigate={() => toResetPassword()} pageTitle='Change Password'/>				
				<View>
					<View > 
						<View>
							<Text style={styles.formDesc}>You must enter your current password and then type your new password twice.</Text>
						</View>
				

						<View style={styles.positionCenter}>
							<View>
								<View>															
								<TextInput 
									style={currentPassword != '' ? styles.formInputEmailFilled : styles.formInputEmail}
									placeholder='Current Password'
									autoCapitalize={'none'}
									secureTextEntry={true}
									value={currentPassword}
									onChangeText={(text) => setCurrentPassword(text)}
									
									returnKeyType="next"
								/>
								</View>
							</View>
						</View>

						<View style={styles.positionCenter}>
							<View>
								<View>															
								<TextInput 
									ref={inputNewPassword}
									style={newPassword != '' ? styles.formInputEmailFilled : styles.formInputEmail}
									placeholder='New Password'
									autoCapitalize={'none'}
									secureTextEntry={true}
									value={newPassword}
									onChangeText={(text) => setNewPassword(text)}								
									returnKeyType="next"
								/>
								</View>
							</View>
						</View>


						<View style={styles.positionCenter}>
							<View>
								<View>															
								<TextInput 
									ref={inputRepeatPassword}									
									style={repeatPassword != '' ? styles.formInputEmailFilled : styles.formInputEmail}
									placeholder='Repeat Password'
									autoCapitalize={'none'}
									secureTextEntry={true}
									value={repeatPassword}
									onChangeText={(text) => setRepeatPassword(text)}
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
								<Text style={email != '' ? styles.textButtonLoginFilled : styles.textButtonLogin}>Change Password</Text>
							</Button>
						</View>						

					</View>
				</View>
			</ScrollView>
		</Fragment>
	)

}

export default ChangePassword
