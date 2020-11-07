import React,{useState, Fragment} from 'react'
import {
	View,
	ScrollView,
	Image,
	Touchable,
	TextInput,
	TouchableNativeFeedback
} from 'react-native'

import styles from './searchtransfer.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {MobileNav} from '../../../../components'

const SearchTransfer = (props) => {
	const [profileData, setProfileData] = useState([])
	const [historyData, setHistoryData] = useState([])

	const toDashboard = () => {
		props.navigation.navigate('UserDashboard')
	}

	const toAmountBank = () => {
		props.navigation.navigate('AmountBank')
	}




	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>				
				<MobileNav thisnavigate={() => toDashboard()} pageTitle='Find Receiver'/>				

				<View style={styles.container}>
				<View style={styles.inputSearchTransfer}>
					<View style={styles.likeRow}>
						<TextInput placeholder='Search Receiver Here'/>
					</View>
				</View>
				</View>

				<View style={styles.container}>
					<View style={styles.likeRowTwo}>						
							<Text style={styles.contact}>Quick Access</Text> 							
					</View>

					<View style={styles.likeRowTwo}>

						<TouchableNativeFeedback onPress={() => toAmountBank()}>						
							<View style={styles.quickPanelist}>
		 						<View style={styles.quickAccessPos}>
									<Image source={{uri: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'}} 
										style = {{ width: 65, height: 65, borderRadius : 12 }}/>												 							
									<Text style={styles.profileName}>Samuel</Text>
									<Text style={styles.transactionStatus}>+2523</Text>
								</View>	
							</View>
						</TouchableNativeFeedback>

						<View style={styles.quickPanelist}>
	 						<View style={styles.quickAccessPos}>
								<Image source={{uri: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'}} 
									style = {{ width: 65, height: 65, borderRadius : 12 }}/>												 							
								<Text style={styles.profileName}>Samuel</Text>
								<Text style={styles.transactionStatus}>+2523</Text>
							</View>	
						</View>

						<View style={styles.quickPanelist}>
	 						<View style={styles.quickAccessPos}>
								<Image source={{uri: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'}} 
									style = {{ width: 65, height: 65, borderRadius : 12 }}/>												 							
								<Text style={styles.profileName}>Samuel</Text>
								<Text style={styles.transactionStatus}>+2523</Text>
							</View>	
						</View>												
					</View>														

				</View>				

				<View style={styles.container}>
					<View style={styles.likeRowTwo}>						
							<Text style={styles.contact}>All Contacts</Text> 							
					</View>					

					<View style={styles.likeRowTwo}>						
							<Text style={styles.countContact}>17 Contact Founds</Text> 							
					</View>					
				</View>
					<View styles={styles.flexColumn}>


						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
									<Image source={{uri: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'}} 
											style = {{ width: 65, height: 65, borderRadius : 12 }}/>									
			 						<View style={styles.profileNameNavbarSection}>
										<Text style={styles.profileName}>Samuel Suhi</Text>
										<Text style={styles.transactionStatus}>+62 813-8492-9994</Text>
									</View>			
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
										<Text style={styles.transactionStatus}>+62 813-8492-9994</Text>
									</View>			
								</View>
							
							</View>							
						</View>												

					

					</View>
				

			</ScrollView>
		</Fragment>
	)
}

export default SearchTransfer