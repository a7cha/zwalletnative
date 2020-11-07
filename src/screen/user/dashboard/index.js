import React,{useState, Fragment} from 'react'
import {
	View,
	ScrollView,
	Image,
	Touchable,
	TextInput,
	TouchableNativeFeedback
} from 'react-native'

import styles from './dashboard.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {Navbar} from '../../../components'

const UserDashboard = (props) => {
	const [profileData, setProfileData] = useState([])
	const [historyData, setHistoryData] = useState([])

	const toTransfer = () => {
		props.navigation.navigate('SearchTransfer')
	}

	const toTransactionHistory = () => {
		props.navigation.navigate('TransactionHistory')
	}

	const toTopup = () => {
		props.navigation.navigate('Topup')
	}

	const toTransactionDetail = () => {
		props.navigation.navigate('TransactionDetail')
	}


	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>
				<Navbar/>

				<View style={styles.container}>

					<View style={styles.balanceBox}>
						<View style={styles.balanceTextPos}>
							<Text style={styles.balanceText}>Balance</Text>
							<Text style={styles.balanceValue}>Rp120.000</Text>
							<Text style={styles.phoneNumber}>+62 813-9387-7946</Text>
						</View>
					</View>

					<View style={styles.likeRow}>
						<View style={{flexDirection : 'row'}}>
							
							<Button style={styles.buttonTransfer} onPress={() => toTransfer()}><Text>Transfer</Text></Button>
							<Button style={styles.buttonTransfer} onPress={() => toTopup()}><Text>Topup</Text></Button>
							
						</View>
					</View>


					<View style={styles.likeRowTwo}>
						
							<Text style={styles.pageTitle}>Transaction History</Text> 
							<TouchableNativeFeedback onPress={() => toTransactionHistory()}>
								<Text style={styles.seeAll}>See all</Text>
							</TouchableNativeFeedback>
							
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

export default UserDashboard