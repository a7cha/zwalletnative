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
				<MobileNav thisnavigate={() => toDashboard()} pageTitle='History'/>				

				<View style={styles.container}>
					<View style={styles.likeRowTwo}>						
							<Text style={styles.paginationBorder}>This week</Text> 							
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

					<View style={styles.likeRowTwo}>						
							<View style={styles.likeRowSorting}>
								<Button style={styles.sortingMoney} ><Icon name='arrow-up' size={30} color={'#FF5B37'}/></Button>
								<Button style={styles.sortingMoney}><Icon name='arrow-down' size={30} color={'#1EC15F'}/></Button>
							</View>

							<View>						
								<Button style={styles.filterByDateButton}>
									<Text style={styles.FilterByDateText}>Filter By Date</Text>
								</Button>
							</View>
					</View>						

			</ScrollView>
		</Fragment>
	)
}

export default TransactionHistory