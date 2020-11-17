import React,{useState, Fragment, useEffect} from 'react'
import {
	View,
	ScrollView,
	Image,
	Touchable,
	TextInput,
	TouchableNativeFeedback
} from 'react-native'

import styles from './changeNumber.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {MobileNav} from '../../../../components'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import {editUser} from '../../../../redux/actions/User'

const changeNumber = (props) => {
	const [profileData, setProfileData] = useState([])
	const [phoneNumber, setPhoneNumber] = useState([])
	const [note, setNote] = useState('')
	const dispatch = useDispatch()

	const toPersonalInformation = () => {
		props.navigation.navigate('PersonalInformation')
	}

	const {token}= useSelector((s)=> s.Auth)	
	const {data , messageEdit} = useSelector((s) => s.User)	



	const submitNumber = () => {
		dispatch(editUser({phoneNumber : phoneNumber}, token))
		props.navigation.navigate('ProfileMenu')
	}

	const deleteNumber = () => {
		dispatch(editUser({phoneNumber : 0}, token))
	}	

	console.log(phoneNumber)

	useEffect(() => {


	}, [data])


	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>				
				<MobileNav thisnavigate={() => toPersonalInformation()} pageTitle='Change Number'/>				

				<View style={styles.container}>
				<View>
					{ data.phoneNumber == 0 ? 
						(
							<Text style={styles.changeNumberText}>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</Text>
						)
						:
						(
							<Text style={styles.changeNumberText}>You can only delete the phone number and then you must add another phone number.</Text>
						)
					
					}
				</View>


					<View styles={styles.flexColumn}>


						{ data.phoneNumber == 0 ? 
							(
								<>
								<View style={styles.positionCenter}>
									<View style={phoneNumber != '' ? styles.borderInputFilled : styles.borderInput}>

										<View style={{flexDirection : 'row'}}>

										<Icon name='phone' size={30} color={phoneNumber != '' ? '#6379F4'  : 'rgba(169, 169, 169, 0.6)'} style={{top : 13}} />
										<Text style={styles.prenumber}>+62</Text>				
										<TextInput 
											style={styles.formInputEmail}
											keyboardType='numeric'
											placeholder='Enter your phone number'
											autoCapitalize={'none'}
											value={phoneNumber}
											onChangeText={(text) => setPhoneNumber(text)}
											onSubmitEditing={() => submitNumber()}
											returnKeyType="next"
										/>
										</View>
									</View>									
								</View>		

								<View style={styles.phoneNumberButton}>
									<View style={styles.positionCenter}>
										<Button style={phoneNumber != '' ? styles.buttonSubmitFilled : styles.buttonSubmit} onPress={() => submitNumber()}>
											<Text style={phoneNumber != '' ? styles.textButtonLoginFilled : styles.textButtonLogin}> Submit</Text>
										</Button>
									</View>																
								</View>								
								</>
							)
							:
							(
								<View style={styles.dashboardPanelist}>
									<View style={styles.spaceBetween}>
										<View style={styles.profileStatus}>

						 						<View style={styles.profileNameNavbarSection}>										
													<Text style={styles.transactionStatus}>Phone Number</Text>
															<Text style={styles.textPanelConfirm}>+{data.phoneNumber}</Text>
												</View>			

												<TouchableNativeFeedback onPress={() => deleteNumber()}>
													<Icon name='trash' style={{position: 'absolute', marginLeft : 270, marginTop: 20}} size={25} color={'#6379F4'}></Icon>
												</TouchableNativeFeedback>
										</View>							
									</View>							
								</View>	
							)

						}

																	

					</View>		

					
		
														

				</View>
			</ScrollView>
		</Fragment>
	)
}

export default changeNumber