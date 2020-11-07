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

const PinTransfer = (props) => {
	const [profileData, setProfileData] = useState([])
	const [historyData, setHistoryData] = useState([])
	const [pincode, setPincode] = useState('')

	const toAmountBank = () => {
		props.navigation.navigate('AmountBank')
	}

	const toTransferStatus = () => {
		props.navigation.navigate('TransferStatus')
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
								onSubmitEditing  ={() => toPinStatus()}
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