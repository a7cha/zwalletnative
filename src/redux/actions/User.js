import Axios from 'axios'
import {REACT_APP_API} from '../../../env.js'

export const UserRequest = () => {
	return {
		type : 'USERS_REQUEST'
	}
}

export const UserSuccess = (data) => {
	return { 
		type : 'USER_SUCCESS',
		payload : data[0]
	}
}

export const UserError = (error) => {
	return {
		type :'USER_ERROR',
		payload : error
	}
}


export const GetUser = (fields) => {
	return (dispatch) => {
		dispatch(UserRequest())
		const headers = { headers : { 'Authorization' : fields}}
		return Axios.get(`${REACT_APP_API}/user`, headers)
		.then((res) => {
			const data = res.data.data
			console.log('hasil dari redux getuser', data)
			dispatch(UserSuccess(data))
		}).catch((err) => {
			const message = err.message
			console.log('user error redux', message)
			dispatch(UserError(message))
		})
	}
}


export const GetUserByid =(token, id) => async dispatch => {
	const headers = { headers : { 'Authorization' : token}}
	const res = await axios.get(`${REACT_APP_API}/user/getuser?id=${id}`)
	dispatch({type : 'GET_DATA_USER_BY_ID', payload : res.data.data[0]})
}