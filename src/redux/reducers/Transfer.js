const initialState = {
	dataTransfer : [],
	loading : false,
	dataTransferSearch : []
}


const Transfer = (state = initialState, action = {}) => {
	switch (action.type){
		case 'GET_TRANSFER_DATA' :
			return{
				...state,
				dataTransfer : action.payload,
				loading : true
			}
			case 'GET_TRANSFER_DATA_SEARCH' :
			return{
				...state,
				dataTransferSearch : action.payload,
				loading : true
			}
		default : 
			return {
				...state
			}
	}
}



export default Transfer