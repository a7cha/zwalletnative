import React,{useState, Fragment, useEffect} from 'react'
import {
	View,
	ScrollView,
	Image,
	Touchable,
	TextInput,
	TouchableNativeFeedback
} from 'react-native'

import styles from './confirmtransfer.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {MobileNav} from '../../../../components'
import axios from 'axios';
import {useSelector} from 'react-redux'

const confirmTransfer = (props) => {
	const [profileData, setProfileData] = useState([])
	const [transferData, setTransferData] = useState([])
	const [note, setNote] = useState('')

	const toAmountBank = () => {
		props.navigation.navigate('AmountBank')
	}


	let {amount, notes, itemId, photo, phoneNumber, fullName, time, balance } = props.route.params

	const Auth = useSelector((s)=> s.Auth)


	useEffect(() => {
    	const headers = { headers: {'Authorization': Auth.data.token.token}}
        axios.get(`http://192.168.1.10:7000/zwallet/api/v1/user/getuser?id=${itemId}`,headers)
        .then(res =>{
          
          setProfileData(res.data.data[0])

          console.log('ini data amount',profileData) 
        
        }).catch(err => {
          console.log('ini error data amount',err.message)
        });		
	}, [])

	const balanceLeft = balance - amount
	const toPinTransfer = () => {

		props.navigation.navigate('PinTransfer',{amount : amount, notes : notes, itemId : itemId, photo : profileData.img, phoneNumber : profileData.phoneNumber, fullName : profileData.fullName, time : time, status : 'transfer', balanceLeft : balanceLeft },)
	}
	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>				
				<MobileNav thisnavigate={() => toAmountBank()} pageTitle='Confirmation'/>				

				<View style={styles.container}>

					<View style={styles.likeRowTwo}>						
							<Text style={styles.contact}>Transfer to</Text> 							
					</View>					
					

					<View styles={styles.flexColumn}>
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

					<View style={styles.likeRowTwo}>						
							<Text style={styles.contact}>Details</Text> 							
					</View>			

					<View styles={styles.flexColumn}>

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



						<View style={styles.positionCenter}>
							<Button style={styles.buttonSubmitFilled} onPress={() => toPinTransfer()}>
								<Text style={styles.textButtonLoginFilled}> Continue</Text>
							</Button>
						</View>																			

					</View>							

				</View>
			</ScrollView>
		</Fragment>
	)
}

export default confirmTransfer