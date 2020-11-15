const initialState = {
	data : [],
	loading : false,
	temporary : [],
	isEditSuccess : false,
	isEditFailed : false,
	messageEdit : ''
};

	const User = (state = initialState, action = {}) => {
		switch (action.type) {
			case 'USER_REQUEST':
				return {
					...state,
					loading : true
				};
			case 'USER_SUCCESS' :
				return {
					...state,
					loading : false,
					data : action.payload
				};
			case 'USER_ERROR' : 
				return {
					...state,
					loading : false,
					isLogin : false,
					data : [],
					error : action.payload
				};
			case 'GET_DATA_USER_BY_ID' :
				return {
					...state,
					loading : false,
					temporary : action.payload
				};
			case  'EDIT_USER_REQUEST' : 
				return {
					...state,
					loading : true
				};
			case 'EDIT_USER_SUCCESS' :
				return {
					...state,
					loading : false,
					messageEdit : action.payload.message,
					isEditSuccess : true,
					isEditFailed : false
				}
			case 'EDIT_USER_FAILED' :
				return {
					...state,
					loading : false,
					messageEdit : action.payload.message,
					isEditSuccess : false,
					isEditFailed : true
				}
			default : 
				return state

		}
	}

	export default User;