import React,{useRef, useState, Fragment} from 'react'
import {
	ScrollView,
	View,
	TextInput,
	ToastAndroid,
	TouchableNativeFeedback
} from 'react-native'
import {Button, Text} from 'react-native-paper'
import styles from './form.style.js'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const RegisterForm = (props) => {
	const [username, setUsername] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const onSubmit = () => {
		props.navigation.navigate('RegisterPIN');
	}

	const toLogin = () => {
		props.navigation.navigate('Login')
	}

	return(
		<Fragment>
			<ScrollView>
				<View>
					<Text>Ini Form Register</Text>
					<View>
						<TouchableNativeFeedback onPress={() => toLogin()}>
							<Text>Login</Text>
						</TouchableNativeFeedback>
					</View>
				</View>
			</ScrollView>
		</Fragment>
	)
}

export default RegisterForm;