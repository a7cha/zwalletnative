import React,{useState, Fragment, useEffect} from 'react'
import {
	View,
	ScrollView,
	Image,
	Touchable,
	TextInput,
	TouchableNativeFeedback
} from 'react-native'

import styles from './notification.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {MobileNav} from '../../../components'
import {TopupIcons} from '../../../assets/resources'
import Axios from 'axios';
import {useSelector} from 'react-redux'



const Notification = (props) => {
	const [userData, setUserData] = useState([])
	const [historyData, setHistoryData] = useState([])
	const [pincode, setPincode] = useState('')


	const toDashboard = () => {
		props.navigation.navigate('UserDashboard')
	}

	const Auth = useSelector((s)=> s.Auth)

    useEffect(() => {           
    		const headers = { headers: {'Authorization': Auth.data.token.token}}  
	        Axios.get('http://192.168.1.10:7000/zwallet/api/v1/user', headers )
	        .then(res =>{
	        
	        	setUserData(res.data.data[0])

	        
	          console.log('ini data did history: ', userData)
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
				<MobileNav thisnavigate={() => toDashboard()} pageTitle='Notification'/>				
				<View style={styles.container}>

					{historyData.map(history => {
						return(
								<View style={styles.dashboardPanelist}>
									<View style={styles.spaceBetween}>

										<View style={styles.profileStatus}>
											<TouchableNativeFeedback>
												{ history.sendBy == userData.id ? (
													<Icon name='arrow-down' size={30} color={'#FF5B37'}/>
												) : (
													<Icon name='arrow-down' size={30} color={'#4CEDB3'}/>
												)
												
												}												
												
											</TouchableNativeFeedback>

					 						<View style={styles.profileNameNavbarSection}>

												
												{ history.sendBy == userData.id ? (
													<Text style={styles.vcAccount}>transferred to {history.receiveBy}</Text>
												) : (
													<Text style={styles.vcAccount}>transfer from {history.receiveBy}</Text>
												)
												
												}
												<Text style={styles.vcNumber}>Rp.{history.amountTransfer}</Text>
											</View>			
										</View>							
									</View>							
								</View>									
						)
					})}




						
					



					

				</View>			
			</ScrollView>
		</Fragment>
	)
}

export default Notification