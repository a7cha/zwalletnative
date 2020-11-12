import Axios from 'axios'
import {REACT_APP_API} from '../../../env.js'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const AuthLoginRequest = ()=> {
    return{
        type: 'LOGIN_REQUEST'
    }
}

export const AuthLoginSuccess = (token)=> {
    return{
        type: 'LOGIN_SUCCESS',
        payload: token
    }
}
export const AuthLoginError = (error)=> {
    return{
        type: 'LOGIN_ERROR',
        payload: error
    }
}


export const isAdmin = () => {
    return{
        type: 'IS_ADMIN'
    }
}

export const isUser = () => {
    return{
        type: 'IS_USER'
    }
}


export const AuthLogin = (fields) => {
    return (dispatch) =>{
        dispatch(AuthLoginRequest())
        return Axios({
            method: 'POST',
            data: fields,
            url: `${REACT_APP_API}/auth/login`
        }).then((res)=> {
            const data = res.data
            if(data.token.role == 100){
                dispatch(isUser())
            }else {
                dispatch(isAdmin())
            }
            const token = data.token.token            
            dispatch(AuthLoginSuccess(token))
        }).catch((err)=> {
            const message = err.message
            console.log('ini error auth redux', message)
            dispatch(AuthLoginError(message))
        })
    }
}


export const AuthLogout = ()=> {
    return{
        type: 'LOGOUT',
    }
}
