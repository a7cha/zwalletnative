const initialState = {
		dataFilter 	: [],
		dataAll : []
};

const TransactionHistory = (state = initialState, action = {}) => {
	switch (action.type){
		case 'GET_TRANSACTION_HISTORY_USER':
			return{
				...state,
				dataAll : action.payload
			};
		case 'GGET_TRANSACTION_HISTORY_USER_BY_FILTER' :
			return {
				...state,
				dataFilter : action.payload
			}
		default :
			return {
				...state
			}
	}
}



export default TransactionHistory

