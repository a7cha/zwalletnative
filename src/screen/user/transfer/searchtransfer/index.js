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
import {useSelector, useDispatch} from 'react-redux'
import {getTransferData, getTransferSearch} from '../../../../redux/actions/Transfer'
import {GetUserById} from '../../../../redux/actions/User'
import {IMAGE_URI} from '../../../../../env.js'

const SearchTransfer = (props) => {
	const [profileData, setProfileData] = useState([0])
	const [quickAccess, setQuickAccess] = useState([])	
	const [limit, setLimit] = useState(6)
	const [max, setMax] = useState(0)

	

	const toDashboard = () => {
		props.navigation.navigate('UserDashboard')
	}

	const toAmountBank = (id) => {
		props.navigation.navigate('AmountBank', {itemId : id})
	}

	const dispatch = useDispatch()

	const {token}= useSelector((s)=> s.Auth)
	const {data} = useSelector((s) => s.User)
	const {dataTransfer, dataTransferSearch} = useSelector((s) => s.Transfer)

	console.log('                  ini data transfer dari redux                    ', dataTransfer)

	useEffect(() => {
		dispatch(getTransferData(token))

		const result = dataTransfer.filter(item => {
			return item.id !== data.id
		})

		setProfileData(result)		

	}, [])

	const searching = (query) => {		

		if(query.length != 0){
				
		dispatch(getTransferSearch(query, token))
		.then(res => {
			const result = dataTransferSearch.filter(item => {
				return item.id !== data.id
			})

			console.log(query.length)
			setProfileData(result)
			console.log('                               ini hasil searching',dataTransferSearch,'                                                            ini hasil searching')
		}).catch(err => {
			console.log(err)
		})			
		}else {
			dispatch(getTransferData(token))

			const result = dataTransfer.filter(item => {
				return item.id !== data.id
			})

			setProfileData(result)				
		}


	}



	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>				
				<MobileNav thisnavigate={() => toDashboard()} pageTitle='Find Receiver'/>				

				<View style={styles.container}>
				<View style={styles.inputSearchTransfer}>
					<View style={styles.likeRow}>
						<TextInput placeholder='Search Receiver Here' onChangeText={(query) => searching(query)}/>
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
					 							{ transfer.img !== '-' ? 
					 								(
													<Image 	source = {{uri: IMAGE_URI + transfer.img}} 
															style = {{ width: 65, height: 65, borderRadius : 12 }}/>												 							
					 								) 
					 								: 
					 								(
													<Image 	source = {{uri: 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'}} 
															style = {{ width: 65, height: 65, borderRadius : 12 }}/>												 							
					 								)

					 							}

												<Text style={styles.profileName}>{transfer.fullName}</Text>
												<Text style={styles.transactionStatus}></Text>
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
												{transfer.img === '-' ? (
														<Image source={{uri: 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'}} style = {{ width: 65, height: 65, borderRadius : 12 }}/>																							
													) : (
														<Image source={{uri: `${IMAGE_URI}${transfer.img}`}} style = {{ width: 65, height: 65, borderRadius : 12 }}/>									
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