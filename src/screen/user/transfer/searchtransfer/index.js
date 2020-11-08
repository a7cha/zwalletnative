import React,{useState, Fragment, useEffect} from 'react'
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
import axios from 'axios';
import {useSelector} from 'react-redux'

const SearchTransfer = (props) => {
	const [profileData, setProfileData] = useState([])
	const [quickAccess, setQuickAccess] = useState([])
	const [email, setEmail] = useState([])
	const [limit, setLimit] = useState(6)
	const [max, setMax] = useState(0)

	const toDashboard = () => {
		props.navigation.navigate('UserDashboard')
	}

	const toAmountBank = (id) => {
		props.navigation.navigate('AmountBank', {itemId : id})
	}

	const Auth = useSelector((s)=> s.Auth)		

	useEffect(() => {
    	const headers = { headers: {'Authorization': Auth.data.token.token}}  

        axios.get('http://192.168.1.10:7000/zwallet/api/v1/user', headers )
        .then(res =>{
        
        	setEmail(res.data.data[0].email)

        
          console.log('ini email: ', email)
        }).catch(err => {
          console.log('data transfer axios error: ', err.message)
        })

    	axios.get(`http://192.168.1.10:7000/zwallet/api/v1/user/all?sortBy=fullName&sortType=ASC&limit=9999&page=0`,headers)
        .then(res =>{

	        const result = res.data.data.filter(man => {
	             return man.email !== email
	        })        	
        	setProfileData(result)


        	console.log('ini data profile transfer',profileData)
        	
        }).catch(err => {
          console.log(err)
        });   

	}, [])





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

						{	profileData.slice(0,3).map(transfer => {
							 return(
									<TouchableNativeFeedback onPress={() => toAmountBank(transfer.id)}>						
										<View style={styles.quickPanelist}>
					 						<View style={styles.quickAccessPos}>
												<Image source={{uri: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'}} 
													style = {{ width: 65, height: 65, borderRadius : 12 }}/>												 							
												<Text style={styles.profileName}>{transfer.fullName}</Text>
												<Text style={styles.transactionStatus}>{transfer.phoneNumber.length}</Text>
											</View>	
										</View>
									</TouchableNativeFeedback>							 	
							 )
						})
						}


					</View>														

				</View>				

				<View style={styles.container}>
					<View style={styles.likeRowTwo}>						
							<Text style={styles.contact}>All Contacts</Text> 							
					</View>					

					<View style={styles.likeRowTwo}>						
							<Text style={styles.countContact}>{profileData.length} Contact Founds</Text> 							
					</View>					
				</View>
					<View styles={styles.flexColumn}>

						{ profileData.map(transfer => {
								return(
									<TouchableNativeFeedback onPress={() => toAmountBank(transfer.id)}>
									<View style={styles.dashboardPanelist}>
										<View style={styles.spaceBetween}>
											<View style={styles.profileStatus}>
												{transfer.img == '' ? (
														<Image source={{uri: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'}} style = {{ width: 65, height: 65, borderRadius : 12 }}/>																							
													) : (
														<Image source={{uri: transfer.img}} style = {{ width: 65, height: 65, borderRadius : 12 }}/>									
													)

												}
												
						 						<View style={styles.profileNameNavbarSection}>
													<Text style={styles.profileName}>{transfer.fullName}</Text>
													<Text style={styles.transactionStatus}>{transfer.phoneNumber != 0 ? (transfer.phoneNumber) : ('-')}</Text>
												</View>			
											</View>
										
										</View>							
									</View>
									</TouchableNativeFeedback>																		
								)							
							})
						}

											

					

					</View>
				

			</ScrollView>
		</Fragment>
	)
}

export default SearchTransfer