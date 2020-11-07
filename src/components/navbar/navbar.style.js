import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { RFPercentage as fp } from "react-native-responsive-fontsize";

export default StyleSheet.create({
	navbarBackground : {
		borderBottomRightRadius : 20,
		borderBottomLeftRadius : 20,
		height : hp(15),
        width : wp(100),
        marginBottom : hp(2)

	},
	profileNameNavbarSection : {
		flexDirection : 'column',
		marginLeft : wp(3),
		marginTop : hp(0.1)
	},
	profileSection: {
		flexDirection :  'row',
	},
	navbarSection : {
		marginHorizontal : 5
	},
	spaceBetween : {
		justifyContent: 'space-between',
		flexDirection : 'row',
		marginHorizontal : wp(5),
		marginVertical : hp(5)
	},
	notificationSection : {
		marginTop : hp(2)
	},
	helloText : {
		fontSize : fp(3.5),
		marginBottom : 4,
		fontFamily : 'NunitoSans-Light'
	},
	profileNameNavbar : {
		fontSize : fp(3.5),
		fontFamily : 'NunitoSans-SemiBold'	
	}
})