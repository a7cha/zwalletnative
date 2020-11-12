import { combineReducers } from 'redux'
import Auth from './Auth'
import User from './User'
import TransactionHistory from './TransactionHistory.js'
import TopupStep from './Topup'
import Transfer from './Transfer'

const reducers = combineReducers({
    Auth,
    User,
    TransactionHistory,
    TopupStep,
    Transfer
})

export default reducers