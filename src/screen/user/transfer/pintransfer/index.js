import React,{useState, Fragment} from 'react'
import {
	View,
	ScrollView,
	Image,
	Touchable,
	TextInput,
	TouchableNativeFeedback
} from 'react-native'

import styles from './pintransfer.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {MobileNav} from '../../../../components'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import axios from 'axios';
import {useSelector} from 'react-redux'
import { REACT_APP_API } from '../../../../../env.js'

const PinTransfer = (props) => {
	const [profileData, setProfileData] = useState([])
	const [historyData, setHistoryData] = useState([])
	const [pincode, setPincode] = useState('')

	const {token} = useSelector((s)=> s.Auth)

	const toAmountBank = () => {
		props.navigation.navigate('ConfirmTransfer')
	}

	let {amount, notes, itemId, photo, phoneNumber, fullName, time,status, balanceLeft} = props.route.params


	const toTransferStatus = () => {

		let data = {
			receiver : parseInt(itemId),
			status : status,
			amountTransfer : amount,
			note : notes,
			balanceLeft : balanceLeft,
			pin : parseInt(pincode)		
		}

    	const headers = { headers: {'Authorization': token}}		
        axios.post(`${REACT_APP_API}/transaction/`,data,headers)
             .then(res => {
                props.navigation.navigate('TransferStatus',{amount : amount, notes : notes, itemId : itemId, photo : photo, phoneNumber : phoneNumber, fullName : fullName, time : time, status : 'transfer', balanceLeft : balanceLeft })

                console.log('berhasil')
             })
             .catch(err => {
                console.log('ini salah',err)
        })		

		
	}




	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>				
				<MobileNav thisnavigate={() => toAmountBank()} pageTitle='Enter Your PIN'/>				

				<View style={styles.container}>
	
					<View styles={styles.flexColumn}>

						<View style={styles.positionCenter}>
							<Text style={styles.formDesc}>
								Enter your 6 digits PIN for confirmation to continue transferring money. 
							</Text>

							<SmoothPinCodeInput
								codeLength={6}
								cellStyle={{
									borderWidth: 2,
									borderRadius: 10,
									borderColor: 'rgba(169, 169, 169, 0.6)',
								}}
								cellStyleFocused={{
									borderColor: '#6379F4',
								}}
								value={pincode}
								onTextChange={(code) => setPincode(code)}
								onSubmitEditing  ={() => toTransferStatus()}
							/>								
						</View>					




					</View>							

				</View>

						<View style={styles.buttonPos}>
							<View style={styles.positionCenter}>
								<Button style={styles.buttonSubmitFilled} onPress={() => toTransferStatus()}>
									<Text style={styles.textButtonLoginFilled}> Transfer Now</Text>
								</Button>
							</View>																			
						</View>				
			</ScrollView>
		</Fragment>
	)
}

export default PinTransfer