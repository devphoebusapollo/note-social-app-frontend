import ACTIONS from '../Actions/';

const initialState = {
    user: [],
    isAdmin: false,
    isLogged: false
};

const authReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case ACTIONS.LOGIN :
            return {
                ...state,
                isLogged: true
            }
        case ACTIONS.LOGOUT :
            return {
                ...state,
                isLogged: false
            }
        default:
            return state
    }
}

export default authReducer;