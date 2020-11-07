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
				<MobileNav thisnavigate={() => toDashboard()} pageTitle='Notification'/>				
				<View style={styles.container}>

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
									<TouchableNativeFeedback>
										<Icon name='arrow-down' size={30} color={'#4CEDB3'}/>
									</TouchableNativeFeedback>

			 						<View style={styles.profileNameNavbarSection}>
										<Text style={styles.vcAccount}>Transfered from Joshua Lee</Text>
										<Text style={styles.vcNumber}>Rp220.000</Text>
									</View>			
								</View>							
							</View>							
						</View>		


						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
									<TouchableNativeFeedback>
										<Icon name='arrow-down' size={30} color={'#4CEDB3'}/>
									</TouchableNativeFeedback>

			 						<View style={styles.profileNameNavbarSection}>
										<Text style={styles.vcAccount}>Transfered from Joshua Lee</Text>
										<Text style={styles.vcNumber}>Rp220.000</Text>
									</View>			
								</View>							
							</View>							
						</View>		


						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
									<TouchableNativeFeedback>
										<Icon name='arrow-down' size={30} color={'#4CEDB3'}/>
									</TouchableNativeFeedback>

			 						<View style={styles.profileNameNavbarSection}>
										<Text style={styles.vcAccount}>Transfered from Joshua Lee</Text>
										<Text style={styles.vcNumber}>Rp220.000</Text>
									</View>			
								</View>							
							</View>							
						</View>							

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
									<TouchableNativeFeedback>
										<Icon name='arrow-down' size={30} color={'#4CEDB3'}/>
									</TouchableNativeFeedback>

			 						<View style={styles.profileNameNavbarSection}>
										<Text style={styles.vcAccount}>Transfered from Joshua Lee</Text>
										<Text style={styles.vcNumber}>Rp220.000</Text>
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