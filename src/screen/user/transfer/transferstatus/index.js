import React,{useState, Fragment, useEffect} from 'react'
import {
	View,
	ScrollView,
	Image,
	Touchable,
	TextInput,
	TouchableNativeFeedback
} from 'react-native'
import {REACT_APP_API} from '../../../../../env'

import styles from './transferstatus.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {IconSuccess, IconFailed} from '../../../../assets/resources'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import {GetUser} from '../../../../redux/actions/User'
import {getHistoryTransactionUser} from '../../../../redux/actions/TransactionHistory'

const TransferStatus = (props) => {
	const [profileData, setProfileData] = useState([])
	const [historyData, setHistoryData] = useState([])
	const [pincode, setPincode] = useState('')

	const {token} = useSelector((s)=> s.Auth)

	const {data} = useSelector((s)=> s.User)
	const {dataAll} = useSelector((s) => s.TransactionHistory)


	const dispatch = useDispatch()

	const toDashboard = () => {
		props.navigation.navigate('UserDashboard')
		dispatch(GetUser(token))
    	dispatch(getHistoryTransactionUser(token))    

	}

	let {amount, notes, itemId, photo, phoneNumber, fullName, time, balanceLeft } = props.route.params


	

	useEffect(() => {
    	const headers = { headers: {'Authorization': token}}
        axios.get(`${REACT_APP_API}/user/getuser?id=${itemId}`,headers)
        .then(res =>{
          
          setProfileData(res.data.data[0])

          console.log('ini data amount',profileData) 
        
        }).catch(err => {
          console.log('ini error data amount',err.message)
        });		
	}, [])


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
										<Text style={styles.textPanelConfirm}>Rp.{amount}</Text>
									</View>			
								</View>							
							</View>							
						</View>														

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
			 						<View style={styles.profileNameNavbarSection}>										
										<Text style={styles.transactionStatus}>Balance Left</Text>
										<Text style={styles.textPanelConfirm}>Rp.{balanceLeft}</Text>
									</View>			
								</View>							
							</View>							
						</View>	

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
			 						<View style={styles.profileNameNavbarSection}>										
										<Text style={styles.transactionStatus}>Date & Time</Text>
										<Text style={styles.textPanelConfirm}>{time}</Text>
									</View>			
								</View>							
							</View>							
						</View>	

						<View style={styles.dashboardPanelist}>
							<View style={styles.spaceBetween}>
								<View style={styles.profileStatus}>
			 						<View style={styles.profileNameNavbarSection}>										
										<Text style={styles.transactionStatus}>Notes</Text>
										<Text style={styles.textPanelConfirm}>{notes}</Text>
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
									{profileData.img == '' ? (
											<Image source={{uri: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'}} style = {{ width: 65, height: 65, borderRadius : 12 }}/>																							
										) : (
											<Image source={{uri: profileData.img}} style = {{ width: 65, height: 65, borderRadius : 12 }}/>									
										)

									}									
			 						<View style={styles.profileNameNavbarSection}>
										<Text style={styles.profileName}>{profileData.fullName}</Text>
										{	profileData.phoneNumber != 0 ? (
												<Text style={styles.transactionStatus}>+{profileData.phoneNumber}</Text>
											) : (
												<Text style={styles.transactionStatus}>-</Text>
											)

										}
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