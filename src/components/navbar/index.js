import React,{useState, Fragment, useEffect} from 'react'
import {
	View,
	Image,
	TouchableNativeFeedback,
	TextInput
} from 'react-native'

import styles from './navbar.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {ExampleProfile} from '../../assets/resources/illustration'
import {useSelector} from 'react-redux'
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import Axios from 'axios';

const Navbar = (props) => {

	const {navigate, toProfile} = props
	const [userData, setUserData] = useState([])
	const toNotification = () => {
		props.navigation.navigate('Notification')
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
	        }, [])

	return(
			<View style={styles.navbarBackground}>

				<View style={styles.spaceBetween}>
					<TouchableNativeFeedback onPress={toProfile}>
					<View style={styles.profileSection}>
						<Image source={{uri: userData.img}} 
								style = {{ width: 65, height: 65, borderRadius : 12 }}/>
						<View style={styles.profileNameNavbarSection}>
							<Text style={styles.helloText}>Hello ,</Text>
							<Text style={styles.profileNameNavbar}>{userData.fullName}</Text>
						</View>					
					</View>
					</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={navigate}>
					<View style={styles.notificationSection}>
						<Icon name='bell' size={35} color="#4D4B57"/>
					</View>
				</TouchableNativeFeedback>

				</View>


			</View>
	)	
}

export default Navbar