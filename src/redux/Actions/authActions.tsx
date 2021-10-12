import ACTIONS from './index';
import axios from 'axios';

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

export const fetchUser = async (token: any) => {
    const res = await axios.post('/user/getuser', { token });
    return res;
};

export const dispatchGetUser = (res: any) => {
    return {
        type: ACTIONS.GET_USER,
        payload: {
            user: res.data
        }
    }
}