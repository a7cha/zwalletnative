import React,{useState, Fragment, useEffect} from 'react'
import {
	View,
	ScrollView,
	Image,
	Touchable,
	TextInput,
	TouchableNativeFeedback
} from 'react-native'

import styles from './personalinformation.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {MobileNav} from '../../../../components'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'

const PersonalInformation = (props) => {
	const [profileData, setProfileData] = useState([])
	const [transferData, setTransferData] = useState([])
	const [note, setNote] = useState('')

	const toProfileMenu = () => {
		props.navigation.navigate('ProfileMenu')
	}

	const dispatch = useDispatch()

	const toChangeNumber = () => {
		props.navigation.navigate('changeNumber')

	}	

	

	const {fullName, email, phoneNumber} = props.route.params







	const split = fullName.split(' ')
	const firstName = split[0]
	const lastName = split[1]

	console.log(fullName)


	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>				
				<MobileNav thisnavigate={() => toProfileMenu()} pageTitle='Personal Information'/>				

				<View style={styles.container}>



					<View styles={styles.flexColumn}>

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
			 						<View style={styles.profileNameNavbarSection}>										
										<Text style={styles.transactionStatus}>First Name</Text>
										<Text style={styles.textPanelConfirm}>{firstName}</Text>
									</View>			
								</View>							
							</View>							
						</View>														

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
			 						<View style={styles.profileNameNavbarSection}>										
										<Text style={styles.transactionStatus}>Last Name</Text>
										<Text style={styles.textPanelConfirm}>{lastName}</Text>
									</View>			
								</View>							
							</View>							
						</View>	

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
			 						<View style={styles.profileNameNavbarSection}>										
										<Text style={styles.transactionStatus}>Verified E-Mail</Text>
										<Text style={styles.textPanelConfirm}>{email}</Text>
									</View>			
								</View>							
							</View>							
						</View>	

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
									
				 						<View style={styles.profileNameNavbarSection}>										
											<Text style={styles.transactionStatus}>Phone Number</Text>
											{ phoneNumber == 0 ? 
												(	
													<TouchableNativeFeedback onPress={() => toChangeNumber()}>
														<Text style={styles.addPhoneNumberText}>Add Phone Number</Text>																
													</TouchableNativeFeedback>
												) 
												: 
												(
													<Text style={styles.textPanelConfirm}>+{phoneNumber}</Text>
												)
											}										
										</View>			
										{ phoneNumber == 0 ?
											(
												<Text></Text>
											)
											:
											(
												<TouchableNativeFeedback onPress={() => toChangeNumber()}>
													<Icon name='edit-2' style={{position : 'absolute',marginLeft : 270, marginTop : 25}} size={25} color={'#6379F4'}></Icon>
												</TouchableNativeFeedback>
											)
										}
									
								</View>							
							</View>							
						</View>	
																	

					</View>							

				</View>
			</ScrollView>
		</Fragment>
	)
}

export default PersonalInformation