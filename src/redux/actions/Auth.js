import Axios from 'axios'
import {REACT_APP_API} from '../../../env.js'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const ResetPasswordRequest = () => {
    return{
        type : 'RESET_PASSWORD_REQUEST'
    }
}

export const ResetPasswordSuccess = (data) => {
    return {
        type : 'RESET_PASSWORD_SUCCESS',
        payload : data
    }
}

export const ResetPasswordFailed = (error) => {
    return{
        type : 'RESET_PASSWORD_FAILED',
        payload : error
    }
}

export const AuthLoginRequest = ()=> {
    return{
        type: 'LOGIN_REQUEST'
    }
}

export const AuthRegisterRequest = () => {
    return {
        type : 'REGISTER_REQUEST'
    }
}

export const AuthRegisterSuccess = (data) => {
    return {
        type : 'REGISTER_SUCCESS',
        payload : data
    }
}

export const AuthRegisterFailed = (error) => {
    return {
        type : 'REGISTER_FAILED',
        payload : error
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


export const AuthRegister = (fields) => async dispatch => {
    dispatch(AuthRegisterRequest())
    try{
        const res = await Axios.post(`${REACT_APP_API}/auth/register`, fields)
        dispatch(AuthRegisterSuccess(res))
    }catch (error) {
        dispatch(AuthRegisterFailed(error.message))
    }  
}


export const CreatePin = (fields) => async dispatch => {
    dispatch(AuthRegisterRequest())
    try{
        const res = await Axios.patch(`${REACT_APP_API}/auth/create_pin`, fields)
        dispatch(AuthRegisterSuccess(res))
    }catch (error){
        dispatch(AuthRegisterFailed(error.message))
    }
}


export const ResetPassword = (data) => async dispatch => {
    dispatch(ResetPasswordRequest())
    try{
        const res = await Axios.patch(`${REACT_APP_API}/auth/reset_password`, data)
        dispatch(ResetPasswordSuccess(res))
    }catch (error) {
        dispatch(ResetPasswordFailed(error.message))
    }
}


export const AuthLogout = ()=> {
    return{
        type: 'LOGOUT',
    }
}
