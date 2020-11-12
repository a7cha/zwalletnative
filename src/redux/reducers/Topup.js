const initialState = {
	topupStep : []
}


const TopupStep = (state = initialState, action ={}) => {
	switch (action.type){
		case 'GET_TOPUP_STEP' :
			return {
				...state,
				topupStep  : action.payload
			};
		default :
			return {
				...state
			}
	}
}

export default TopupStep