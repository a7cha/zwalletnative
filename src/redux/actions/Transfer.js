import axios from 'axios'
import {REACT_APP_API} from '../../../env.js'

export const TransferRequest = () =>  {
	return {
		type : 'TRANSFER_REQUEST'
	}
}

export const TransferSuccess = (data) => {
	return {
		type : 'TRANSFER_SUCESS',
		payload : data
	}
}


export const TransferFailed = (error) => {
	return {
		type : 'TRASFER_FAILED',
		payload : error
	}
}


export const getTransferData = (fields) => async dispatch => {
	const headers = { headers : { 'Authorization' : fields}}
	const res = await axios.get(`${REACT_APP_API}/user/all?sortBy=fullName&sortType=ASC&limit=9999&page=0`, headers)	
	dispatch({type : 'GET_TRANSFER_DATA', payload : res.data.data})
}


export const getTransferSearch = (query,fields) => async dispatch => {
	const headers = { headers : { 'Authorization' : fields}}
	const res = await axios.get(`${REACT_APP_API}/user/all?search=${query}&sortBy=fullName&sortType=ASC&limit=99999&page=0`, headers)	
	dispatch({type : 'GET_TRANSFER_DATA_SEARCH', payload : res.data.data})
}

export const getQuickAccessData = (fields) => async dispatch => {
	const headers = {headers : {'Authorization' : fields}}
	const res = await axios.get
}