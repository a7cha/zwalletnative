import { StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { RFPercentage as fp } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    zwalletIcon :{
        fontFamily : 'NunitoSans-Regular',
        fontSize : fp(5),
        fontWeight : 'bold',
        color: '#6379F4',
        paddingTop : hp('12%'),
        paddingBottom : hp('12%')
        
    },
    positionCenter : {
        alignItems : 'center'
    },
    positionCenterRepeat : {
        marginTop : hp(2),
        alignItems : 'center'
    },
    positionCenterButtonEmail : {
        marginTop : hp(8),
        alignItems : 'center'
    },
    bodyBackground : {
        backgroundColor : '#FAFCFF',
    }, 
    formBoxRegister:{
        backgroundColor : 'white',
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20,
        height : hp('100%'),
        width : wp('100%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,        
    },
    formTitle : {
        paddingTop : hp('9%'),
        paddingBottom : hp('4%'),
        fontFamily : 'NunitoSans-Regular',
        fontSize : fp(4),
        fontWeight : 'bold',
        color : '#3A3D42'
    },
    formDesc : {
        fontFamily : 'NunitoSans-Regular',
        fontSize : fp(3),
        textAlign : "center",
        color: 'rgba(58, 61, 66, 0.6)',
        marginLeft : wp(10),
        marginRight : wp(10),
        paddingBottom : hp(6),
        lineHeight : 28  
    },
    formInputUsername : {
        width : wp(90),
        height : 50,
        borderTopColor : 'white',
        borderRightColor : 'white',
        borderLeftColor : 'white',
        borderBottomColor : 'rgba(169, 169, 169, 0.6)',
        borderWidth : 1,
        borderRadius : 5,
        marginVertical : 5
    },
    formInputUsernameFilled : {
        width : 350,
        height : 50,
        borderTopColor : 'white',
        borderRightColor : 'white',
        borderLeftColor : 'white',
        borderBottomColor : '#6379F4',
        borderWidth : 1,
        borderRadius : 5,
        marginVertical : 5
    },    
    formInputEmail : {
        borderWidth : 0,
        width : wp(86.5),
        marginVertical : 5,
        marginLeft : wp(1),
        fontSize  : fp(3),
        
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
        marginTop : 20
    },
    formInputPassword : {
        width : 350,
        height : 50,
        borderTopColor : 'white',
        borderRightColor : 'white',
        borderLeftColor : 'white',
        borderBottomColor : 'rgba(169, 169, 169, 0.6)',
        borderWidth : 1,
        borderRadius : 5,
        marginVertical : 5,
        marginTop : 20,
    },
    formInputPasswordFilled : {
        width : 350,
        height : 50,
        borderTopColor : 'white',
        borderRightColor : 'white',
        borderLeftColor : 'white',
        borderBottomColor : '#6379F4',
        borderWidth : 1,
        borderRadius : 5,
        marginVertical : 5,
        marginTop : 20,
    },
    forgotPassword : {
        color : 'rgba(58, 61, 66, 0.8)'
    },
    positionEnd : {
        alignItems :'flex-end',
        marginRight : wp(4),
        marginTop : hp(2)
    },
    buttonSubmit : {
        backgroundColor : '#DADADA',
        marginTop : hp(27),
        padding: 7,
        width : wp(90),
        borderRadius : 12
    },
    buttonSubmitEmail : {
        backgroundColor : '#DADADA',
        marginTop : hp(37),
        padding: 7,
        width : wp(90),
        borderRadius : 12
    },    
    textUnderButton : {
        color: 'rgba(58, 61, 66, 0.8)',
        marginTop : wp(5)
    },
    buttonSubmitFilled : {
        backgroundColor : '#6379F4',
        marginTop : hp(27),
        padding: 7,
        width : wp(90),
        borderRadius : 12  
    },
    buttonSubmitFilledEmail : {
        backgroundColor : '#6379F4',
        marginTop : hp(37),
        padding: 7,
        width : wp(90),
        borderRadius : 12  
    },    
    textButtonLogin : {
        color : '#88888F'   
    },
    textButtonLoginFilled : {
        color : 'white' ,
    },
    col12 : {
        flexDirection : 'row',
        alignSelf : 'center'
    },
    signUpButton : {
        marginTop : wp(5),
        color : '#6379F4'
    },
    borderInput : {
        borderBottomWidth : wp(0.4),
        height : hp(10), 
        width : 365,
        borderBottomColor : 'rgba(169, 169, 169, 0.6)',
    },
    borderInputFilled : {
        borderBottomWidth : wp(0.4),
        height : hp(10), 
        width : wp(90),
        borderBottomColor : '#6379F4',  
    },
    borderInputFilledWrong : {
        borderBottomWidth : wp(0.4),
        height : hp(10), 
        width : wp(90),
        borderBottomColor : '#FF5B37',  
    },        
    borderInputPassword : {
        borderBottomWidth : wp(0.4),
        height : hp(10), 
        width : 365,
        borderBottomColor : 'rgba(169, 169, 169, 0.6)',
        marginTop: hp(2)
    },
    borderInputPasswordFilled : {
        borderBottomWidth : wp(0.4),
        height : hp(10), 
        width : 365,
        borderBottomColor : '#6379F4',  
        marginTop: hp(2)
    },
    borderInputPasswordFilledWrong : {
        borderBottomWidth : wp(0.4),
        height : hp(10), 
        width : 365,
        borderBottomColor : '#FF5B37',  
        marginTop: hp(2)
    },    
    formInputPassword : {
        borderWidth : 0,
        width : wp(76),        
        marginHorizontal : wp(2),
        fontSize  : fp(3),
    }          
})