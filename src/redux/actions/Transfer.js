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
	console.log('data transfer redux',res.data)
	dispatch({type : 'GET_TRANSFER_DATA', payload : res.data.data})
}

export const getQuickAccessData = (fields) => async dispatch => {
	const headers = {headers : {'Authorization' : fields}}
	const res = await axios.get
}