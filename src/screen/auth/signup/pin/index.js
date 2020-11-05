import React, {useRef, useState, Fragment} from 'react';
import {
	ScrollView,
	View,
	TextInput,
	ToastAndroid,
	TouchableNativeFeedback,
	KeyboardAvoidingView,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import styles from './pin.style.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const RegisterPin = (props) => {
	const inputPassword = useRef();
	const [pincode, setPincode] = useState('');
	const [loading, setLoading] = useState(false);

	const onSubmit = () => {
		props.navigation.navigate('Home');
	};

	const toRegister = () => {
		props.navigation.navigate('RegisterForm');
	};

	return (
		<Fragment>
			<ScrollView style={styles.bodyBackground}>
				<View style={styles.positionCenter}>
					<View>
						<Text style={styles.zwalletIcon}> Zwallet</Text>
					</View>

					<KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="height" enabled   keyboardVerticalOffset={1}>
					<View style={styles.formBoxLogin}>
						<View style={styles.positionCenter}>
							<Text style={styles.formTitle}>Create Security PIN</Text>
							<Text style={styles.formDesc}>
								Create a PIN that’s contain 6 digits number for security purpose
								in Zwallet.
							</Text>
						</View>

						<View style={styles.pincodePosition}>
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
							/>
						</View>

						<View style={styles.positionCenter}>
							<Button
								style={
									pincode.length == 6
										? styles.buttonSubmitFilled
										: styles.buttonSubmit
								}>
								<Text
									style={
										pincode.length == 6
											? styles.textButtonLoginFilled
											: styles.textButtonLogin
									}>
									{' '}
									Confirm
								</Text>
							</Button>
						</View>
					</View>
					</KeyboardAvoidingView>	
				</View>
			</ScrollView>
		</Fragment>
	);
};

export default RegisterPin;
