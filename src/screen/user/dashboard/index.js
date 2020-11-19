import React,{useState, Fragment, useEffect} from 'react'
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
import {useSelector, useDispatch} from 'react-redux'
import {getHistoryTransactionUser} from '../../../redux/actions/TransactionHistory.js'
import {GetUser, editUser} from '../.../../../../redux/actions/User.js'
import messaging from '@react-native-firebase/messaging';


const UserDashboard = (props) => {
	const [userData, setUserData] = useState([])
	const [historyData, setHistoryData] = useState([])

	const dispatch = useDispatch()



	const toTransactionHistory = () => {
		props.navigation.navigate('TransactionHistory')
	}

	const toTopup = () => {
		props.navigation.navigate('Topup')
	}

	const toTransactionDetail = () => {
		props.navigation.navigate('TransactionDetail')
	}

	const toNotification = () => {
		props.navigation.navigate('Notification')
	}	

	const toProfile = () => {
		props.navigation.navigate('ProfileMenu')
	}	

	
	const {token}= useSelector((s)=> s.Auth)	
	const {data, deviceToken} = useSelector((s) => s.User)
	const {dataAll} = useSelector((s) => s.TransactionHistory)

	console.log('                    ini data all',dataAll,'ini akhir data all   ')


	console.log('                             ini device token                                            ' ,deviceToken)
    useEffect(() => {    
    		dispatch(getHistoryTransactionUser(token))    
    		dispatch(editUser({device_token : deviceToken}, token))
 		
    		
	    }, [])	

	const toTransfer = () => {
		dispatch(GetUser(token))
		props.navigation.navigate('SearchTransfer')
	}

	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>
				<Navbar navigate={() => toNotification()} toProfile={() => toProfile()}/>

				<View style={styles.container}>

					<View style={styles.balanceBox}>
						<View style={styles.balanceTextPos}>
							<Text style={styles.balanceText}>Balance</Text>
							<Text style={styles.balanceValue}>Rp.{data.balance}</Text>
							{ data.phoneNumber == 0 ? <Text style={styles.phoneNumber}>_</Text> : <Text style={styles.phoneNumber}>+{data.phoneNumber}</Text>}
							
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
							{ dataAll == undefined || dataAll.length < 3 ? 
								(
									<Text></Text>
								) : 
								(
									<TouchableNativeFeedback onPress={() => toTransactionHistory()}>
										<Text style={styles.seeAll}>See all</Text>
									</TouchableNativeFeedback>
								)

								}

							
					</View>

				</View>
					<View styles={styles.flexColumn}>

					{
						dataAll == undefined ? <Text></Text> : dataAll.slice(0,3).map(history => {
							return(
								<View style={styles.dashboardPanelist}>
									<View style={styles.spaceBetween}>
										<View style={styles.profileStatus}>
											<Image source={{uri: history.img}} 
													style = {{ width: 65, height: 65, borderRadius : 12 }}/>									
					 						<View style={styles.profileNameNavbarSection}>
					 							{ history.sendBy == data.id ? (
					 								<>
					 								<Text style={styles.profileName}>{history.receiveBy}</Text>
					 								<Text style={styles.transactionStatus}>{history.status}</Text>
					 								</>
					 								) : (
					 								<>
					 								<Text style={styles.profileName}>{history.sender}</Text>
					 								<Text style={styles.transactionStatus}>{history.status}</Text>					 								
					 								</>
					 								)					 																				
					 							}
											</View>			
										</View>

										<View>
											{ history.sendBy == data.id ? (
												<Text style={styles.moneyMinus}>-Rp.{history.amountTransfer}</Text>
											) : (
												<Text style={styles.moneyPlus}>+Rp.{history.amountTransfer}</Text>
											)
											
											}
										</View>											
									</View>							
								</View>
							)
						})
					}

													
					</View>
				

			</ScrollView>
		</Fragment>
	)
}

export default UserDashboard