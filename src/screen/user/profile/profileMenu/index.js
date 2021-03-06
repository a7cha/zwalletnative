import React,{useState, Fragment, useEffect} from 'react'
import {
	View,
	ScrollView,
	Image,
	Touchable,
	TextInput,
	ToastAndroid,	
	TouchableNativeFeedback,
	Switch
} from 'react-native'

import styles from './profilemenu.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {MobileNav} from '../../../../components'
import {AuthLogout} from '../../../../redux/actions/Auth.js'
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';
import {useSelector, useDispatch} from 'react-redux'
import {editPhoto, editUser} from '../../../../redux/actions/User'
import {IMAGE_URI} from '../../../../../env.js'

const ProfileMenu = (props) => {
	const [profileData, setProfileData] = useState([])
	const [historyData, setHistoryData] = useState([])
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);	
	const [avatarSource, setAvatarSource] = useState()
	const [ngeditPhoto, setEditPhoto] = useState(false)

	const toDashboard = () => {
		props.navigation.navigate('UserDashboard')
	}

	const ChangePassword = () => {
		props.navigation.navigate('ChangePassword')	
	}

	const toChangePin = () => {
		props.navigation.navigate('ChangePin')
	}
	
	const dispatch = useDispatch()

	const Auth = useSelector((s)=> s.Auth)	



	const {token}= useSelector((s)=> s.Auth)	
	const {data , messageEdit} = useSelector((s) => s.User)

	

	const clearAllData = () => {		
		dispatch(editUser({'device_token' : '-'}, token))
		try{
			dispatch(AuthLogout())
			
		}catch (error){
			console.log(error)
		}
	}	

	
	

	const toPersonalInformation = () => {
		props.navigation.navigate('PersonalInformation', {fullName : data.fullName, email : data.email , phoneNumber : data.phoneNumber} )
	}

	const options = {
	  title: 'Select Avatar',
	  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
	  storageOptions: {
	    skipBackup: true,
	    path: 'images',
	  },
	};	



	const ImageLibrary = () => {
        ImagePicker.showImagePicker({}, (response) => {            
            const formData = new FormData()
            formData.append('images',{
                uri: response.uri,
                name: response.fileName,
                type: response.type
            })           
            dispatch(editPhoto(formData, token))
            .then(res => {
		        ToastAndroid.show(messageEdit, ToastAndroid.SHORT)
            }).catch(err => 
            	ToastAndroid.show(err, ToastAndroid.SHORT)
            )
            
            setEditPhoto(true)
        })
	}
	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>				
				<MobileNav thisnavigate={() => toDashboard()}/>				

				<View style={styles.container}>		

					<View style={styles.positionCenter}>
						<View style={styles.flexColumn}>							
						{ data.img == '' ? (
							<Image source ={{uri: 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'}} 
								style = {{ width: 80, height: 80, borderRadius : 12 }}/>													
							) : ngeditPhoto ? (
							<Image source ={{uri: `${IMAGE_URI}${data.img}`}} 
								style = {{ width: 80, height: 80, borderRadius : 12 }}/>								
							):
							(
							<Image source ={{uri: `${IMAGE_URI}${data.img}`}} 
								style = {{ width: 80, height: 80, borderRadius : 12 }}/>													
							)

						}
						</View>
					</View>



					<View style={styles.positionCenter}>
						<View style={styles.flexColumn}>							
							<TouchableNativeFeedback style={styles.marginTop} onPress={ImageLibrary}>
								<View style={styles.likeRow}>
									<Icon name='edit-2' size={15} color={'#7A7886'}/>
										<Text style={styles.editText}> Edit</Text>																							

								</View>
							</TouchableNativeFeedback>
						</View>
					</View>

					<View style={styles.positionCenter}>
						<View style={styles.flexColumn}>							
							<Text style={styles.profileNme}>{data.fullName}</Text>
						</View>
					</View>

					<View style={styles.positionCenter}>
						<View style={styles.flexColumn}>
							{ data.phoneNumber == 0 ? (
									<Text style={styles.phoneNumber}>-</Text>													
								) : (
									<Text style={styles.phoneNumber}>+{data.phoneNumber}</Text>													
								)

							}							

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

						<TouchableNativeFeedback onPress={() => toChangePin()}>
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