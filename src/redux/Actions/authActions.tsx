import ACTIONS from './index';

export const dispatchLogin = () => {
    return {
        type: ACTIONS.LOGIN
    }
};

export const dispatchLogout = () => {
    return {
        type: ACTIONS.LOGOUT
    }
};