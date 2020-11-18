const initialState = {
    token: '',
    loading: false,
    isUser : false,
    isAdmin : false,
    isLogin :false,
    error : '',
    data : []
  };
  
  const Auth = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          loading: false,
          isLogin: true,
          token: action.payload
        };
      case 'LOGIN_ERROR':
        return {
          ...state,
          loading: false,
          isLogin: false,
          token:'',
          error: action.payload
        };
      case 'LOGOUT':
        return {
          ...state,
          loading: false,
          isLogin: false,
          token: '',
          _persist: {
            rehydrated: true,
            version: -1
          }
        };
      case 'REGISTER_REQUEST' : 
        return {
          ...state,
          loading : true,          
        };
      case 'REGISTER_SUCCESS' : 
        return {
          ...state,
          loading : false,
          data : action.payload
        };
      case 'REGISTER_FAILED' : 
        return {
          ...state,
          loading : false,
          data : action.payload
        };
      case 'RESET_PASSWORD_REQUEST' : 
        return {
            ...state,
            loading : true
        }
      case 'RESET_PASSWORD_SUCCESS' :
        return {
          ...state,
          loading : false,
          data : action.payload
        }
      case 'RESET_PASSWORD_FAILED' :
        return {
          ...state,
          loading : false,
          data : action.payload
        }
      case 'IS_ADMIN' :
        return {
          ...state,
          isAdmin : true,
          isUser : false
        };
      case 'IS_USER' : 
        return {
          ...state,
          isAdmin : false,
          isUser : true
        };
      default:
        return state
    }
  };
  export default Auth;
  