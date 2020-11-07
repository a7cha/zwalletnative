import React,{useState, Fragment} from 'react'
import {
	View,
	Image,
	Touchable,
	TextInput
} from 'react-native'

import styles from './navbar.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {ExampleProfile} from '../../assets/resources/illustration'


const Navbar = (props) => {
	return(
			<View style={styles.navbarBackground}>

				<View style={styles.spaceBetween}>
					<View style={styles.profileSection}>
						<Image source={{uri: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'}} 
								style = {{ width: 65, height: 65, borderRadius : 12 }}/>
						<View style={styles.profileNameNavbarSection}>
							<Text style={styles.helloText}>Hello ,</Text>
							<Text style={styles.profileNameNavbar}>Arungi Cahaya</Text>
						</View>					
					</View>
					
					<View style={styles.notificationSection}>
						<Icon name='bell' size={35} color="#4D4B57"/>
					</View>
				</View>


			</View>
	)	
}

export default Navbar