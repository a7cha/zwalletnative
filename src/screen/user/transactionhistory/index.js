import React,{useState, Fragment, useEffect} from 'react'
import {
	View,
	ScrollView,
	Image,
	Touchable,
	TextInput,
	TouchableNativeFeedback,
	
} from 'react-native'

import styles from './transactionhistory.style.js'
import {Button, Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import {MobileNav} from '../../../components'
import {useSelector, useDispatch} from 'react-redux'
import {getHistoryTransactionUser} from '../../../redux/actions/TransactionHistory.js'

const TransactionHistory = (props) => {
	const [userData, setUserData] = useState([])
	const [historyData, setHistoryData] = useState([])

	const toDashboard = () => {
		props.navigation.navigate('UserDashboard')
	}

	const dispatch = useDispatch()
	const {token}= useSelector((s)=> s.Auth)	
	const {data} = useSelector((s) => s.User)
	const {dataAll} = useSelector((s) => s.TransactionHistory)

    useEffect(() => {           
    		dispatch(getHistoryTransactionUser(token))        
		}, [])	


	return(
		<Fragment>
			<ScrollView style={styles.bodyBackground}>				
				<MobileNav thisnavigate={() => toDashboard()} pageTitle='History'/>				

				<View style={styles.container}>
					<View style={styles.likeRowTwo}>						
							<Text style={styles.paginationBorder}>This week</Text> 							
					</View>					

				</View>
					<View styles={styles.flexColumn}>

						{ dataAll.map(history =>{
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

					<View style={styles.likeRowTwo}>						
							<View style={styles.likeRowSorting}>
								<Button style={styles.sortingMoney} ><Icon name='arrow-up' size={30} color={'#FF5B37'}/></Button>
								<Button style={styles.sortingMoney}><Icon name='arrow-down' size={30} color={'#1EC15F'}/></Button>
							</View>

							<View>						
								<Button style={styles.filterByDateButton}>
									<Text style={styles.FilterByDateText}>Filter By Date</Text>
								</Button>
							</View>
					</View>						

			</ScrollView>
		</Fragment>
	)
}

export default TransactionHistory