import React,{useRef, useState, Fragment, useEffect} from 'react'
import {
	ScrollView,
	View,
	TextInput,
	ToastAndroid,
	TouchableNativeFeedback
} from 'react-native'
import {Button, Text} from 'react-native-paper'	
import styles from './changepin.style.js'
import Icon from 'react-native-vector-icons/Feather'
import {MobileNav} from '../../../../components'
import {useSelector, useDispatch} from 'react-redux'
import {editUser} from '../../../../redux/actions/User'
import {REACT_APP_API} from '../../../../../env.js'
import axios from 'axios';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';



const ChangePin = (props) => {
	const [loading, setLoading] = useState(false);
	const [pincodeStatus, setPincodeStatus] = useState(false)
	const [pincode, setPincode] = useState('')
	const [newPincode, setNewPincode] = useState('')


	const toProfileMenu = () => {
		props.navigation.navigate('ProfileMenu');
	};

	const {token}= useSelector((s)=> s.Auth)	
	const {data , messageEdit} = useSelector((s) => s.User)
	const dispatch = useDispatch()

	const toChangePin = () => {
		setPincodeStatus(true)
	}

	const changePin = () => {
	    let data = {
	        pin : pincode,
	        newPin : newPincode
	    }		

		const headers = { headers: {'Authorization': `${token}`}}    
		axios.patch(`${REACT_APP_API}/user/change_pin`,data, headers).
		then(res => {
			props.navigation.navigate('ProfileMenu');
			ToastAndroid.show('Success Change Pin', ToastAndroid.SHORT)							
		})
		.catch(err => {
           ToastAndroid.show('Wrong Current Pin', ToastAndroid.SHORT)			
		})
	}



	

	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>
					<MobileNav thisnavigate={() => toProfileMenu()} pageTitle='Change Pin'/>				
				<View>
					<View > 
						<View>
							{ !pincode ? 
								(
									<Text style={styles.formDesc}>You must enter your current password and then type your new password twice.</Text>
								) 
								: 
								(
									<Text style={styles.formDesc}>Type your new 6 digits security PIN to use in Zwallet.</Text>
								)

							}
						</View>
				
											

						<View style={styles.positionCenter}>

						{ !pincodeStatus ? 
							(
								<>
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
										onSubmitEditing  ={() => toChangePin()}
									/>
								</View>	
								</>
							)
							:
							(
								<>
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
										value={newPincode}
										onTextChange={(code) => setNewPincode(code)}
										onSubmitEditing  ={() => changePin()}
									/>
								</View>	
								</>
							)

						}
						


						<View style={styles.buttonPositionPin}>
							{ !pincodeStatus ? 
								(
									<Button 
										disabled={pincode !== '' ? (false) : (true)}
										style={pincode != '' ? styles.buttonSubmitFilled : styles.buttonSubmit}
										onPress={() => toChangePin()}
									>
										<Text style={pincode != '' ? styles.textButtonLoginFilled : styles.textButtonLogin}>Continue</Text>
									</Button>
								) 
								: 
								(
									<Button 
										disabled={pincode !== '' ? (false) : (true)}
										style={pincode != '' ? styles.buttonSubmitFilled : styles.buttonSubmit}
										onPress={() => changePin()}
									>
										<Text style={pincode != '' ? styles.textButtonLoginFilled : styles.textButtonLogin}>Change Pin</Text>
									</Button>
								)

							}

						</View>


						</View>						

					</View>
				</View>
			</ScrollView>
		</Fragment>
	)

}

export default ChangePin
