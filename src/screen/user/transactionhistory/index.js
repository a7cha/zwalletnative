import React,{useState, Fragment} from 'react'
import {
	View,
	ScrollView,
	Image,
	Touchable,
	TextInput,
	TouchableNativeFeedback
} from 'react-native'

import styles from './transactionhistory.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {MobileNav} from '../../../components'

const TransactionHistory = (props) => {
	const [profileData, setProfileData] = useState([])
	const [historyData, setHistoryData] = useState([])

	const toDashboard = () => {
		props.navigation.navigate('UserDashboard')
	}




	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>
				<TouchableNativeFeedback onPress={() => toDashboard()}>
				<MobileNav thisnavigate={() => toDashboard()} pageTitle='History'/>
				</TouchableNativeFeedback>
				<View style={styles.container}>


				</View>
					<View styles={styles.flexColumn}>

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
									<Image source={{uri: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'}} 
											style = {{ width: 65, height: 65, borderRadius : 12 }}/>									
			 						<View style={styles.profileNameNavbarSection}>
										<Text style={styles.profileName}>Samuel Suhi</Text>
										<Text style={styles.transactionStatus}>Transfer</Text>
									</View>			
								</View>

								<View>
									<Text style={styles.moneyPlus}>+Rp.1231</Text>
								</View>											
							</View>							
						</View>

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
									<Image source={{uri: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'}} 
											style = {{ width: 65, height: 65, borderRadius : 12 }}/>									
			 						<View style={styles.profileNameNavbarSection}>
										<Text style={styles.profileName}>Samuel Suhi</Text>
										<Text style={styles.transactionStatus}>Transfer</Text>
									</View>			
								</View>

								<View>
									<Text style={styles.moneyPlus}>+Rp.1231</Text>
								</View>											
							</View>							
						</View>
																	

					</View>
				

			</ScrollView>
		</Fragment>
	)
}

export default TransactionHistory