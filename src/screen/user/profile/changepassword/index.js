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
import Icon from 'react-native-vector-icons/Feather'
import {MobileNav} from '../../../../components'
import {useSelector, useDispatch} from 'react-redux'
import {editUser} from '../../../../redux/actions/User'
import {REACT_APP_API} from '../../../../../env.js'
import Axios from 'axios'

const ChangePassword = (props) => {
	const inputNewPassword = useRef()
	const inputRepeatPassword = useRef()
	const [email, setEmail]	= useState('');
	const [loading, setLoading] = useState(false);
	const [currentPassword, setCurrentPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [revealPassword, setRevealPassword] = useState(true)
	const [wrongData, setWrongData] = useState(false)	


	const toProfileMenu = () => {
		props.navigation.navigate('ProfileMenu');
	};

	const {token}= useSelector((s)=> s.Auth)	
	const {data , messageEdit} = useSelector((s) => s.User)
	const dispatch = useDispatch()

	const changePassword = () => {
    let data = {
        password : currentPassword,
        newPassword : newPassword
    }
	const headers = { headers: {'Authorization': `${token}`}}    
	Axios.patch(`${REACT_APP_API}/user/change_password`,data,headers)
    .then(res => {
		props.navigation.navigate('ProfileMenu');
    })
    .catch(err => {
      console.log(err)
    });

				
	}

	

	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>
					<MobileNav thisnavigate={() => toProfileMenu()} pageTitle='Change Password'/>				
				<View>
					<View > 
						<View>
							<Text style={styles.formDesc}>You must enter your current password and then type your new password twice.</Text>
						</View>
				

						<View style={styles.positionCenter}>
							
							<View style={currentPassword != '' ? styles.borderInputPasswordFilled : styles.borderInputPassword}>
								<View style={{flexDirection : 'row'}}>
									<Icon name='lock' size={30} color={currentPassword != '' ? wrongData ? '#FF5B37'  : '#6379F4' : 'rgba(169, 169, 169, 0.6)'} style={{top : 10}}/>
									<TextInput 
										disabled={true}
										style={styles.formInputPassword}
										placeholder='Current Password'
										autoCapitalize={'none'}
										value={currentPassword}
										secureTextEntry={revealPassword}
										returnKeyType="send"
										returnKeyLabel="masuk"
										onChangeText={(text) => setCurrentPassword(text)}
										onSubmitEditing={() => inputNewPassword.current.focus()}
									/>
									<TouchableNativeFeedback>
									<Icon name={!revealPassword ? 'eye-off' : 'eye'} size={30} color={'rgba(169, 169, 169, 0.6)'} style={{top : 10}} onPress={() => setRevealPassword(!revealPassword)}/>
									</TouchableNativeFeedback>
								</View>
							</View>
						</View>

						<View style={styles.positionCenter}>
							
							<View style={newPassword != '' ? styles.borderInputPasswordFilled : styles.borderInputPassword}>
								<View style={{flexDirection : 'row'}}>
									<Icon name='lock' size={30} color={newPassword != '' ? wrongData ? '#FF5B37'  : '#6379F4' : 'rgba(169, 169, 169, 0.6)'} style={{top : 10}}/>
									<TextInput 
										ref={inputNewPassword}
										style={styles.formInputPassword}
										placeholder='New Password'
										autoCapitalize={'none'}
										value={newPassword}
										secureTextEntry={revealPassword}
										returnKeyType="send"
										returnKeyLabel="masuk"
										onChangeText={(text) => setNewPassword(text)}
										onSubmitEditing={() => inputRepeatPassword.current.focus()}
									/>
									<TouchableNativeFeedback>
									<Icon name={!revealPassword ? 'eye-off' : 'eye'} size={30} color={'rgba(169, 169, 169, 0.6)'} style={{top : 10}} onPress={() => setRevealPassword(!revealPassword)}/>
									</TouchableNativeFeedback>
								</View>
							</View>
						</View>


						<View style={styles.positionCenter}>
							
							<View style={repeatPassword != '' ? styles.borderInputPasswordFilled : styles.borderInputPassword}>
								<View style={{flexDirection : 'row'}}>
									<Icon name='lock' size={30} color={repeatPassword != '' ? wrongData ? '#FF5B37'  : '#6379F4' : 'rgba(169, 169, 169, 0.6)'} style={{top : 10}}/>
									<TextInput 
										ref={inputRepeatPassword}
										style={styles.formInputPassword}
										placeholder='Repeat New Password'
										autoCapitalize={'none'}
										value={repeatPassword}
										secureTextEntry={revealPassword}
										returnKeyType="send"
										returnKeyLabel="masuk"
										onChangeText={(text) => setRepeatPassword(text)}
										onSubmitEditing={() => changePassword()}
									/>
									<TouchableNativeFeedback>
									<Icon name={!revealPassword ? 'eye-off' : 'eye'} size={30} color={'rgba(169, 169, 169, 0.6)'} style={{top : 10}} onPress={() => setRevealPassword(!revealPassword)}/>
									</TouchableNativeFeedback>
								</View>
							</View>
						</View>												

						<View style={styles.positionCenter}>
							<Button 
								disabled={currentPassword && newPassword && repeatPassword !== '' ? (false) : (true)}
								style={currentPassword && newPassword && repeatPassword != '' ? styles.buttonSubmitFilled : styles.buttonSubmit}
								onPress={() => changePassword()}
							>
								<Text style={currentPassword && newPassword && repeatPassword != '' ? styles.textButtonLoginFilled : styles.textButtonLogin}>Change Password</Text>
							</Button>
						</View>						

					</View>
				</View>
			</ScrollView>
		</Fragment>
	)

}

export default ChangePassword
