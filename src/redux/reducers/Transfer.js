const initialState = {
	dataTransfer : [],
	loading : false,
}


const Transfer = (state = initialState, action = {}) => {
	switch (action.type){
		case 'GET_TRANSFER_DATA' :
			return{
				...state,
				dataTransfer : action.payload,
				loading : true
			}
		default : 
			return {
				...state
			}
	}
}



export default Transfer