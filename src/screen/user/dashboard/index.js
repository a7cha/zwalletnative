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
import Axios from 'axios';
import {useSelector} from 'react-redux'


const UserDashboard = (props) => {
	const [userData, setUserData] = useState([])
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

	const toNotification = () => {
		props.navigation.navigate('Notification')
	}	

	const toProfile = () => {
		props.navigation.navigate('ProfileMenu')
	}	

	const Auth = useSelector((s)=> s.Auth)	

    useEffect(() => {           
    		const headers = { headers: {'Authorization': Auth.data.token.token}}  
	        Axios.get('http://192.168.1.10:7000/zwallet/api/v1/user', headers )
	        .then(res =>{
	        
	        	setUserData(res.data.data[0])

	        
	          console.log('ini data did mount: ', userData)
	        }).catch(err => {
	          console.log('data transfer axios error: ', err.message)
	        });

	        Axios.get('http://192.168.1.10:7000/zwallet/api/v1/user/home', headers )
	        .then(res =>{
	        
	        	setHistoryData(res.data.data.data)

	        
	          console.log('ini history data: ', historyData)
	        }).catch(err => {
	          console.log('data transfer axios error: ', err.message)
	        });	        


	        }, [])	


	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>
				<Navbar navigate={() => toNotification()} toProfile={() => toProfile()}/>

				<View style={styles.container}>

					<View style={styles.balanceBox}>
						<View style={styles.balanceTextPos}>
							<Text style={styles.balanceText}>Balance</Text>
							<Text style={styles.balanceValue}>Rp.{userData.balance}</Text>
							<Text style={styles.phoneNumber}>+{userData.phoneNumber}</Text>
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

					{
						historyData.slice(0,3).map(history => {
							return(
								<View style={styles.dashboardPanelist}>
									<View style={styles.spaceBetween}>
										<View style={styles.profileStatus}>
											<Image source={{uri: history.img}} 
													style = {{ width: 65, height: 65, borderRadius : 12 }}/>									
					 						<View style={styles.profileNameNavbarSection}>
												<Text style={styles.profileName}>{history.receiveBy}</Text>
												<Text style={styles.transactionStatus}>{history.status}</Text>
											</View>			
										</View>

										<View>
											{ history.sendBy == userData.id ? (
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