import React from 'react'
import {AsyncStorage} from '@react-native-async-storage/async-storage'

const TOKEN_KEY = 'jwt'

export const login = (token) => {
    
    AsyncStorage.setItem(TOKEN_KEY, token)

}

export const logout = (history) => {
    AsyncStorage.removeItem(TOKEN_KEY)
}

export const isLogin =  (admin)=> {

    if (AsyncStorage.getItem(TOKEN_KEY)) {
            return true
    }
    return false
}

