import React,{useState, Fragment} from 'react'
import {
	View,
	ScrollView,
	Image,
	Touchable,
	TextInput,
	TouchableNativeFeedback
} from 'react-native'

import styles from './transferstatus.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {IconSuccess, IconFailed} from '../../../../assets/resources'

const TransferStatus = (props) => {
	const [profileData, setProfileData] = useState([])
	const [historyData, setHistoryData] = useState([])
	const [pincode, setPincode] = useState('')


	const toDashboard = () => {
		props.navigation.navigate('UserDashboard')
	}




	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>				

				<View style={styles.container}>

					<View style={styles.positionCenter}>
						<View style={styles.transferStatus}>
							<IconSuccess/>
						</View>
						<View styles={styles.flexColumn}>

						<View style={styles.positionCenter}>
							<Text style={styles.formTitle}>
								Transfer Success
							</Text>							
						</View>					
						</View>							
					</View>

					<View style={styles.likeRowTwo}>						
							<Text style={styles.contact}>Details</Text> 							
					</View>

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
			 						<View style={styles.profileNameNavbarSection}>										
										<Text style={styles.transactionStatus}>Amount</Text>
										<Text style={styles.textPanelConfirm}>Rp100.000</Text>
									</View>			
								</View>							
							</View>							
						</View>														

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
			 						<View style={styles.profileNameNavbarSection}>										
										<Text style={styles.transactionStatus}>Balance Left</Text>
										<Text style={styles.textPanelConfirm}>Rp20.000</Text>
									</View>			
								</View>							
							</View>							
						</View>	

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
			 						<View style={styles.profileNameNavbarSection}>										
										<Text style={styles.transactionStatus}>Date & Time</Text>
										<Text style={styles.textPanelConfirm}>May 11, 2020 - 12.20</Text>
									</View>			
								</View>							
							</View>							
						</View>	

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
			 						<View style={styles.profileNameNavbarSection}>										
										<Text style={styles.transactionStatus}>Notes</Text>
										<Text style={styles.textPanelConfirm}>For buying some socks</Text>
									</View>			
								</View>							
							</View>							
						</View>		
						
						<View style={styles.likeRowTwo}>						
								<Text style={styles.contact}>Transfer to</Text> 							
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

						<View style={styles.buttonPos}>
							<View style={styles.positionCenter}>
								<Button style={styles.buttonSubmitFilled} onPress={() => toDashboard()}>
									<Text style={styles.textButtonLoginFilled}> Back to Home</Text>
								</Button>
							</View>																			
						</View>				
			</ScrollView>
		</Fragment>
	)
}

export default TransferStatus