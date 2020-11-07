import React, {useRef, useState, Fragment} from 'react';
import {
	ScrollView,
	View,
	TextInput,
	ToastAndroid,
	TouchableNativeFeedback,
	KeyboardAvoidingView,
	Gap
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import styles from './status.style.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconSuccess} from '../../../../assets/resources'

const PinStatus = (props) => {

	const toLogin = () => {
		props.navigation.navigate('Login');
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
						  <View style={styles.statusImagePos}>
						  	<IconSuccess/>
						  	<Text style={styles.formTitle}>PIN Successfully Created</Text>
								<Text style={styles.formDesc}>
									Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!
								</Text>
						  </View>


						<View style={styles.positionCenter}>
							<Button
								style={styles.buttonSubmitFilled}
								onPress={() => toLogin()}
							>
							<Text style={styles.textButtonLoginFilled}>
								Login Now
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


export default PinStatus;