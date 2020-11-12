import Axios from 'axios'
import {REACT_APP_API} from '../../../env.js'

export const getTopupStep = () => async dispatch => {
	const res = await Axios.get(`${REACT_APP_API}/topup`)
	dispatch({type : 'GET_TOPUP_STEP', payload : res.data.data})
}