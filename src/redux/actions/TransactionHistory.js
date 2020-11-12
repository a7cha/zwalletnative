import Axios from 'axios'
import {REACT_APP_API} from '../../../env.js'


export const getHistoryTransactionUser = (fields) => async dispatch =>{	
	const headers = { headers : { 'Authorization' : fields}}
	const res = await Axios.get(`${REACT_APP_API}/user/home`, headers)
	dispatch({ type : 'GET_TRANSACTION_HISTORY_USER' ,payload : res.data.data.data})
}

export const getHistoryTransactionUserFilter = (fields, start, end) => async dispatch => { 
	const header = { headers : { 
						'Authorization' : fields,
						'start' : start,
						'end' : end
					}}
	const res = await Axios(`${REACT_APP_API}/transaction/history`, header)	
	dispatch({ type : 'GGET_TRANSACTION_HISTORY_USER_BY_FILTER', payload : res.data.data[0]})				
}