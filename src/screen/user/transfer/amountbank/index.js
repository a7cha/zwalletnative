import React,{useState, Fragment, useEffect} from 'react'
import {
	View,
	ScrollView,
	Image,
	Touchable,
	TextInput,
	TouchableNativeFeedback
} from 'react-native'

import styles from './amountbank.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {MobileNav} from '../../../../components'
import axios from 'axios';
import {useSelector} from 'react-redux'

const AmountBank = (props) => {
	const [profileData, setProfileData] = useState([])
	const [historyData, setHistoryData] = useState([])
	const [notes, setNotes] = useState('')
	const [amountBank, setAmountBank] = useState('')
	const [userData, setUserData] = useState([])


	const toSearchTransfer = () => {
		props.navigation.navigate('SearchTransfer')
	}

	 let {itemId} = props.route.params



	const {token} = useSelector((s)=> s.Auth)

	useEffect(() => {
		const headers = { headers: {'Authorization': token}}
        axios.get('http://192.168.1.13:7000/zwallet/api/v1/user', headers )
        .then(res =>{
        
        	setUserData(res.data.data[0])

        
          console.log('ini data ini user: ', userData)
        }).catch(err => {
          console.log('data ini erornyarror: ', err.message)
        });		

    	
        axios.get(`http://192.168.1.13:7000/zwallet/api/v1/user/getuser?id=${itemId}`,headers)
        .then(res =>{
          
          setProfileData(res.data.data[0])

          console.log('ini data amount',profileData) 
        
        }).catch(err => {
          console.log('ini error data amount',err.message)
        });		
	}, [])


	const toConfirmation = () => {
	
        let arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
        let menit = new Date().getMinutes();
        let jam = new Date().getHours();
        let Tahun = new Date().getFullYear();
        let Tanggal = new Date().getDate();
        let bulan = new Date().getMonth();
        let time = `${arrbulan[bulan]} ${Tanggal}, ${Tahun} - ${jam}.${menit}`;

		props.navigation.navigate('ConfirmTransfer',{amount : amountBank, notes : notes, itemId : itemId, photo : profileData.img, phoneNumber : profileData.phoneNumber, fullName : profileData.fullName, time : time, balance : userData.balance},)
	}




	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>				
				<MobileNav thisnavigate={() => toSearchTransfer()} pageTitle='Transfer'/>				

				<View style={styles.container}>

					

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

					<View style={styles.positionCenter}>
						<View>
							<Text style={styles.moneyAvailable}>Rp{userData.balance} Available</Text>
						</View>

						<View>
							<TextInput 
								style={styles.AmounInput} 
								placeholder='0.00' 
								onChangeText={(text) =>  setAmountBank(text)}
								value={amountBank}
								keyboardType="numeric"
							/>
						</View>

						<View>
							<View>																
							<TextInput 
					        	
								style={notes != '' ? styles.formInputEmailFilled : styles.formInputEmail}
								placeholder='Add some notes'
								autoCapitalize={'none'}
								value={notes}
								onChangeText={(text) => setNotes(text)}
								onSubmitEditing={() => toConfirmation()}
								returnKeyType="next"
							/>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</Fragment>
	)
}

export default AmountBank