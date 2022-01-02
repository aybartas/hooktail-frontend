const INITIAL_STATE = {
    authenticatedUser:null
};


const userReducer = (state = INITIAL_STATE,action) => {
     switch (action.type){
         case 'SET_AUTHENTICATED_USER':
             return {
                 ...state,
                 authenticatedUser : action.payload
             }
         default :
            return state;
     }
}

export default userReducer;

