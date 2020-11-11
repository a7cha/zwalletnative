import Axios from 'axios'
import {REACT_APP_API} from '../../../.env.js'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const AuthLoginRequest = ()=> {
    return{
        type: 'LOGIN_REQUEST'
    }
}

export const AuthLoginSuccess = (data)=> {
    return{
        type: 'LOGIN_SUCCESS',
        payload: data
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
            console.log(data, 'dataas')
            dispatch(AuthLoginSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(AuthLoginError(message))
        })
    }
}


export const AuthLogout = ()=> {
    return{
        type: 'LOGOUT',
    }
}
