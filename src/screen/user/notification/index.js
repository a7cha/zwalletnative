import React,{useState, Fragment} from 'react'
import {
	View,
	ScrollView,
	Image,
	Touchable,
	TextInput,
	TouchableNativeFeedback
} from 'react-native'

import styles from './notification.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {MobileNav} from '../../../components'
import {TopupIcons} from '../../../assets/resources'


const Notification = (props) => {
	const [profileData, setProfileData] = useState([])
	const [historyData, setHistoryData] = useState([])
	const [pincode, setPincode] = useState('')


	const toDashboard = () => {
		props.navigation.navigate('UserDashboard')
	}




	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>				
				<MobileNav thisnavigate={() => toDashboard()} pageTitle='Ini Notif'/>				
				<View style={styles.container}>

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
									<TouchableNativeFeedback>
										<TopupIcons/>
									</TouchableNativeFeedback>

			 						<View style={styles.profileNameNavbarSection}>
										<Text style={styles.vcAccount}>Virtual Account Number</Text>
										<Text style={styles.vcNumber}>2389 081393877946</Text>
									</View>			
								</View>							
							</View>							
						</View>		

					<View>
						<Text style={styles.formDesc}>We provide you virtual account number for top up via nearest ATM.</Text>
					</View>
										
					<View style={styles.likeRowTwo}>						
							<Text style={styles.contact}>How to Top-Up</Text> 							
					</View>

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.topupStat}>
										<Text style={styles.topupNumber}>1</Text>
			 						<View style={styles.profileNameNavbarSection}>
										<Text style={styles.topupText}>Go to the nearest ATM or you can use E-Banking.</Text>
									</View>			
								</View>							
							</View>							
						</View>														

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.topupStat}>
										<Text style={styles.topupNumber}>1</Text>
			 						<View style={styles.profileNameNavbarSection}>
										<Text style={styles.topupText}>Go to the nearest ATM or you can use E-Banking.</Text>
									</View>			
								</View>							
							</View>							
						</View>							



					

				</View>			
			</ScrollView>
		</Fragment>
	)
}

export default Notification