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
import ImagePicker from 'react-native-image-picker';
import {useSelector, useDispatch} from 'react-redux'
import {editPhoto} from '../../../../redux/actions/User'

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
	const dispatch = useDispatch()

	const Auth = useSelector((s)=> s.Auth)	

	const clearAllData = () => {		
		dispatch(AuthLogout())
		props.navigation.navigate('Login')			
	}

	const {token}= useSelector((s)=> s.Auth)	
	const {data , messageEdit} = useSelector((s) => s.User)

	console.log('ini data',data)

	console.log('ini cek berhasil atau tidak     ',messageEdit)
	console.log('                         ini token bro', token)

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
            console.log(response)
            const formData = new FormData()
            formData.append({},{
                uri: response.uri,
                name: response.fileName,
                type: response.type
            })           
            const base64 = 'data:image/jpeg;base64,'
            const ambil = response.data
            const jumlah = base64+ambil
            console.log('                                  ini form data    formdata',formData)
            dispatch(editPhoto(formData, token))

            console.log(data, 'ini error message edit')
            console.log('                                                       ini responsenya wkwokwokowkowkow',response.uri, response.fileName, response.type , 'ini responsenya wkwokwokowkowkow')
            setAvatarSource(response.uri)
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
							<Image source ={{uri: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'}} 
								style = {{ width: 80, height: 80, borderRadius : 12 }}/>													
							) : ngeditPhoto ? (
							<Image source ={{uri: avatarSource}} 
								style = {{ width: 80, height: 80, borderRadius : 12 }}/>								
							):
							(
							<Image source ={{uri: data.img}} 
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
							{ data.phoneNumber != 'NULL' ? (
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