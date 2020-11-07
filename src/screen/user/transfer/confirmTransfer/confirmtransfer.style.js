import { StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { RFPercentage as fp } from "react-native-responsive-fontsize";

export default StyleSheet.create({
	bodyBackground : {
		backgroundColor : '#FAFCFF',
	},
	container : {
		marginHorizontal : wp(5),	
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
		lineHeight : 33,
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
	    marginBottom : hp(1),
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
        marginBottom : hp(3),			
        marginTop : hp(1),
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 5,
		shadowRadius: 5,

		elevation: 0.6, 
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
	paginationBorder : {
		fontFamily : 'NunitoSans-Light',		
		fontSize : fp(3.5),
		color : '#7A7886'
	},
	sortingMoney : {
        backgroundColor : '#DADADA',
        height : hp(10),
        width : wp(8),
        borderRadius : 12,
        marginHorizontal: 7, 
	},
	filterByDateButton : {
        backgroundColor : '#DADADA',
        height : hp(10),
        width : wp(47),
        borderRadius : 12,
        marginHorizontal: 7, 	
        marginTop : hp(4)		
	},
	likeRowSorting : {
	    flex: 1,
	    flexDirection: 'row',	
	    marginTop : hp(4)		
	},
	FilterByDateText : {
		color: '#6379F4',
		fontFamily: 'NunitoSans-Bold',
		fontSize : fp(3),
		justifyContent : 'center',
		flexDirection : 'column'
	},
	inputSearchTransfer	: {
    padding: 3,
    borderColor: '#333',
    marginVertical: 5,
    borderRadius: 12,
    backgroundColor : 'rgba(58, 61, 66, 0.1)'		
	},
	contact : {
		marginTop : hp(4),
		marginBottom : hp(1),
		fontFamily : 'NunitoSans-Bold',		
		fontSize : fp(3),
		color : '#514F5B'		
	},
	countContact : {
		fontFamily : 'NunitoSans-Light',		
		fontSize : fp(3),
		color : '#7A7886'
	},
	quickAccessRow : {
	    flex: 1,
	    flexDirection: 'row',	
	},
	quickPanelist : {
		backgroundColor : 'white',
		height : hp(24),
		width : wp(25),
		borderRadius : 10,
        marginBottom : hp(2),			
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.20,
		shadowRadius: 0.5,

		elevation: 0.5, 				
	},
	quickAccessPos : {
		flexDirection : 'column',
		marginLeft : wp(4.4),
		marginTop : hp(1.5)	
	},
	positionCenter : {
		alignItems : 'center'
	},
    formInputEmail : {
        width : wp(90),
        height : 50,
        borderTopColor : 'white',
        borderRightColor : 'white',
        borderLeftColor : 'white',
        borderBottomColor : 'rgba(169, 169, 169, 0.6)',
        borderWidth : 1,
        borderRadius : 5,
        marginVertical : 5,
    },
    formInputEmailFilled : {
        width : 350,
        height : 50,
        borderTopColor : 'white',
        borderRightColor : 'white',
        borderLeftColor : 'white',
        borderBottomColor : '#6379F4',
        borderWidth : 1,
        borderRadius : 5,
        marginVertical : 5,
    },	
    moneyAvailable : {
        fontFamily : 'NunitoSans-Regular',
        color: '#7C7895',
        fontSize : fp(3)
    },
    AmounInput : {
    	color : '#6379F4',
    	fontSize : fp(7),
    	fontFamily : 'NunitoSans-SemiBold',
    	maxWidth : wp(90),
    	
    	textAlign : 'center'
    },
	textPanelConfirm : {
		color : '#4D4B57',
		fontSize : fp(3.5),
		fontFamily : 'NunitoSans-SemiBold',
		marginTop : hp(1.2)	
	},
    buttonSubmit : {
        backgroundColor : '#DADADA',
        marginTop : hp(5),
        padding: 7,
        width : wp(90),
        borderRadius : 12
    },
    buttonSubmitFilled : {
        backgroundColor : '#6379F4',
        marginTop : hp(5),
        padding: 7,
        width : wp(90),
        borderRadius : 12,
        marginBottom : wp(5)  
    },	
    textButtonLoginFilled : {
        color : 'white' ,
    }    

})