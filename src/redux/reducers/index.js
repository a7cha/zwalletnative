import { combineReducers } from 'redux'
import Auth from './Auth'
import User from './User'
import TransactionHistory from './TransactionHistory.js'


const reducers = combineReducers({
    Auth,
    User,
    TransactionHistory
})

export default reducers