import ACTIONS from '../Actions/';

const token = "";

const tokenReducer = (state = token, action: any) => {
    switch(action.type){
        case ACTIONS.GET_TOKEN:
            return action.payload;
        default:
            return state;
    }
}

export default tokenReducer;