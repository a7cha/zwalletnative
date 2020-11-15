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
import {useSelector, useDispatch} from 'react-redux'
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import Axios from 'axios';
import {GetUser} from '../../redux/actions/User'

const Navbar = (props) => {

	const {navigate, toProfile} = props
	const [userData, setUserData] = useState([])
	const toNotification = () => {
		props.navigation.navigate('Notification')
	}
	
	const dispatch = useDispatch()
	const {data} = useSelector((s) => s.User)
	const {token} = useSelector((s)=> s.Auth)	
	
    useEffect(() => {           
    		dispatch(GetUser(token))
	        }, [])

	return(
			<View style={styles.navbarBackground}>

				<View style={styles.spaceBetween}>
					<TouchableNativeFeedback onPress={toProfile}>
					<View style={styles.profileSection}>
						{data.img == '' ? (
							<Image source ={{uri: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'}} 
								style = {{ width: 65, height: 65, borderRadius : 12 }}/>															
							): (
							<Image source ={{uri: data.img}} 
								style = {{ width: 65, height: 65, borderRadius : 12 }}/>							
							)}

						<View style={styles.profileNameNavbarSection}>
							<Text style={styles.helloText}>Hello ,</Text>
							<Text style={styles.profileNameNavbar}>{data.fullName}</Text>
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