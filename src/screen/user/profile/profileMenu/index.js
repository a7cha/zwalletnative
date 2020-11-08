import React,{useState, Fragment} from 'react'
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
import Axios from 'axios';
import {useSelector} from 'react-redux'

const ProfileMenu = (props) => {
	const [profileData, setProfileData] = useState([])
	const [historyData, setHistoryData] = useState([])
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);	

	const toDashboard = () => {
		props.navigation.navigate('UserDashboard')
	}




	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>				
				<MobileNav thisnavigate={() => toDashboard()}/>				

				<View style={styles.container}>				
					<View styles={styles.flexColumn}>

						<TouchableNativeFeedback>
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

						<TouchableNativeFeedback>
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

						<TouchableNativeFeedback>
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