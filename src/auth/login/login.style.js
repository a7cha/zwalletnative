import { StyleSheet} from 'react-native'

export default StyleSheet.create({
    zwalletIcon :{
        fontFamily : 'NunitoSans-Regular',
        fontSize : 29,
        fontWeight : 'bold',
        color: '#6379F4',
        paddingTop : 50,
        paddingBottom : 50
        
    },
    positionCenter : {
        alignItems : 'center'
    },
    bodyBackground : {
        backgroundColor : '#E5E5E5',
    }, 
    formBox:{
        backgroundColor : 'white',
        borderRadius:   30,
        height : 700
    },
    formTitle : {
        paddingTop : 40,
        paddingBottom : 15,
        fontFamily : 'NunitoSans-Regular',
        fontSize : 24,
        fontWeight : 'bold',
        color : '#3A3D42'
    },
    formDesc : {
        fontFamily : 'NunitoSans-Regular',
        fontSize : 16,
        textAlign : "center",
        color: 'rgba(58, 61, 66, 0.6)',
        marginLeft : 40,
        marginRight : 40,
        paddingBottom : 20        
    },
    formInputEmail : {
        width : 350,
        height : 50,
        borderTopColor : 'white',
        borderRightColor : 'white',
        borderLeftColor : 'white',
        borderBottomColor : 'rgba(169, 169, 169, 0.6)',
        borderWidth : 1,
        borderRadius : 5,
        marginVertical : 5,
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
    }
    
})