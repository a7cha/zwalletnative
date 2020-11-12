import React,{useState, Fragment, useEffect} from 'react'
import {
	View,
	ScrollView,
	Image,
	Touchable,
	TextInput,
	TouchableNativeFeedback,
	Switch
} from 'react-native'

import styles from './profilemenu.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {MobileNav} from '../../../../components'
import {AuthLogout} from '../../../../redux/actions/Auth.js'
import axios from 'axios';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';


const ProfileMenu = (props) => {
	const [profileData, setProfileData] = useState([])
	const [historyData, setHistoryData] = useState([])
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);	

	const toDashboard = () => {
		props.navigation.navigate('UserDashboard')
	}

	const ChangePassword = () => {
		props.navigation.navigate('ChangePassword')	
	}
	const dispatch = useDispatch()

	const Auth = useSelector((s)=> s.Auth)	

	const clearAllData = () => {
		dispatch(AuthLogout())
	}

	useEffect(() => {
    		const headers = { headers: {'Authorization': Auth.data.token.token}}  
	        axios.get('http://192.168.1.10:7000/zwallet/api/v1/user', headers )
	        .then(res =>{
	        
	        	setProfileData(res.data.data[0])

	        
	          console.log('ini data personal information: ', profileData)
	        }).catch(err => {
	          console.log('data transfer axios error: ', err.message)
	        });
	}, [])	

	const toPersonalInformation = () => {
		props.navigation.navigate('PersonalInformation', {fullName : profileData.fullName, email : profileData.email , phoneNumber : profileData.phoneNumber} )
	}

	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>				
				<MobileNav thisnavigate={() => toDashboard()}/>				

				<View style={styles.container}>		

					<View style={styles.positionCenter}>
						<View style={styles.flexColumn}>							
						<Image source={{uri: profileData.img}} 
								style = {{ width: 80, height: 80, borderRadius : 12 }}/>						
						</View>
					</View>



					<View style={styles.positionCenter}>
						<View style={styles.flexColumn}>							
							<TouchableNativeFeedback style={styles.marginTop}>
								<View style={styles.likeRow}>
									<Icon name='edit-2' size={15} color={'#7A7886'}/>
										<Text style={styles.editText}> Edit</Text>																							

								</View>
							</TouchableNativeFeedback>
						</View>
					</View>

					<View style={styles.positionCenter}>
						<View style={styles.flexColumn}>							
							<Text style={styles.profileNme}>{profileData.fullName}</Text>
						</View>
					</View>

					<View style={styles.positionCenter}>
						<View style={styles.flexColumn}>							
							<Text style={styles.phoneNumber}>+{profileData.phoneNumber}</Text>					
						</View>
					</View>					

							
							

					<View styles={styles.flexColumn}>

						<TouchableNativeFeedback onPress={() => toPersonalInformation()}>
							<View style={styles.dashboardPanelist}>
								<View style={styles.spaceBetween}>
									<View style={styles.profileStatus}>									
				 						<View style={styles.profileNameNavbarSection}>
											<Text style={styles.profileSubmenu}>Personal Information</Text>
										</View>			
									</View>

									<View style={styles.profileMenuIcon}>									
											<Icon name='arrow-right' size={33} color={'#7E7D84'}/>							
									</View>											
								</View>							
							</View>
						</TouchableNativeFeedback>	

						<TouchableNativeFeedback onPress={() => ChangePassword()}>
							<View style={styles.dashboardPanelist}>
								<View style={styles.spaceBetween}>
									<View style={styles.profileStatus}>									
				 						<View style={styles.profileNameNavbarSection}>
											<Text style={styles.profileSubmenu}>Change Password</Text>
										</View>			
									</View>

									<View style={styles.profileMenuIcon}>									
											<Icon name='arrow-right' size={33} color={'#7E7D84'}/>							
									</View>											
								</View>							
							</View>
						</TouchableNativeFeedback>	

						<TouchableNativeFeedback>
							<View style={styles.dashboardPanelist}>
								<View style={styles.spaceBetween}>
									<View style={styles.profileStatus}>									
				 						<View style={styles.profileNameNavbarSection}>
											<Text style={styles.profileSubmenu}>Change PIN</Text>
										</View>			
									</View>

									<View style={styles.profileMenuIcon}>									
											<Icon name='arrow-right' size={33} color={'#7E7D84'}/>							
									</View>											
								</View>							
							</View>
						</TouchableNativeFeedback>	

						<TouchableNativeFeedback>
							<View style={styles.dashboardPanelist}>
								<View style={styles.spaceBetween}>
									<View style={styles.profileStatus}>									
				 						<View style={styles.profileNameNavbarSection}>
											<Text style={styles.profileSubmenu}>Notification</Text>
										</View>			
									</View>

									<View style={styles.profileMenuIcon}>									
									      <Switch
									        trackColor={{ false: "#767577", true: "#81b0ff" }}
									        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
									        ios_backgroundColor="#3e3e3e"
									        onValueChange={toggleSwitch}
									        value={isEnabled}
									      />
									</View>											
								</View>							
							</View>
						</TouchableNativeFeedback>		

						<TouchableNativeFeedback onPress={() => clearAllData()}>
							<View style={styles.dashboardPanelist}>
								<View style={styles.positionCenter}>
									<Text style={styles.logoutButton}>Logout</Text>																				
								</View>							
							</View>
						</TouchableNativeFeedback>																													

					</View>
				</View>

					

			</ScrollView>
		</Fragment>
	)
}

export default ProfileMenu