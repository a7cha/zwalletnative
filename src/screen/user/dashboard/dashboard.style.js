import { StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { RFPercentage as fp } from "react-native-responsive-fontsize";

export default StyleSheet.create({
	bodyBackground : {
		backgroundColor : '#FAFCFF',
	},
	container : {
		marginHorizontal : wp(5),
		marginVertical : hp(5)		
	},
	balanceBox : {
		backgroundColor : '#6379F4',
		height : hp(26),
		borderRadius : 20,
        marginBottom : hp(5),
        flexDirection : 'column'
	},
	balanceTextPos : {
		marginLeft : 20,
		marginVertical : 27
	},
	balanceText : {
		fontSize : fp(3),
		fontFamily : 'NunitoSans-Regular',
		color: '#D0D0D0',
		lineHeight : 33
	}, 
	balanceValue : {
		fontSize : fp(5),
		color : 'white',
		fontFamily : 'NunitoSans-Bold',
		lineHeight : 50,
	}, 
	phoneNumber : {
		fontSize : fp(3),
		fontFamily : 'NunitoSans-Regular',
		color: '#D0D0D0',
		lineHeight : 33		
	},
	likeRow : {
	    flex: 1,
	    flexDirection: 'row',	
	},
	likeRowTwo : {
	    flex: 1,
	    flexDirection: 'row',	
	    marginTop : hp(4),
	    marginBottom : hp(4),
	    justifyContent : 'space-between',
	    marginHorizontal :10
	},
	col6 : {
		
	},
	buttonTransfer : {

        backgroundColor : '#DADADA',
        padding: 8,
        width : wp(42),
        borderRadius : 12,
        marginHorizontal: 7,        	
	},
	textButtonDashboard : {
		fontSize : 20,	
		fontFamily : 'NunitoSans-Bold',
	},
	pageTitle : {
        fontFamily : 'NunitoSans-Regular',
        fontSize : fp(3.5),
        fontWeight : 'bold',
        color : '#3A3D42'		
	},
	seeAll : {
        fontFamily : 'NunitoSans-Regular',
        fontSize : fp(3.5),
        color : '#6379F4'				
	},
	flexColumn : {
		flexDirection : 'column'
	},
	dashboardPanelist : {
		backgroundColor : 'white',
		height : hp(17),
		borderRadius : 10,
        marginBottom : hp(1),			
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.20,
		shadowRadius: 0.5,

		elevation: 0., 
	},
	spaceBetween : {
		justifyContent: 'space-between',
		flexDirection : 'row',
		marginHorizontal : wp(7),
		marginVertical : hp(3)
	},
	profileNameNavbarSection : {
		flexDirection : 'column',
		marginLeft : wp(3),
		marginTop : hp(0.1)
	},
	profileStatus : {
		flexDirection :  'row',		
	},
	profileName : {
		color : '#4D4B57',
		fontSize : fp(3),
		fontFamily : 'NunitoSans-SemiBold',
		marginTop : 3,
		marginBottom : 8
	},
	transactionStatus : {
		fontSize : fp(3),
		color: '#7A7886'
	},
	moneyPlus : {
		marginTop : hp(2),
		fontFamily : 'NunitoSans-SemiBold',
		color : '#1EC15F',
		fontSize : fp(4)
	},
	moneyMinus : {
		marginTop : hp(2),
		fontFamily : 'NunitoSans-SemiBold',
		color : '#FF5B37',
		fontSize : fp(4)
	}


})