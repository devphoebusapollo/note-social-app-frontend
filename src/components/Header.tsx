import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import {dispatchLogout} from '../redux/Actions/authActions';
import axios from 'axios';

const initialState = {
    msg: ''
};

export default function Header() {

    const auth = useSelector((state: RootStateOrAny) => state.auth);

    const [msg, setMsg] = useState(initialState);

    const {isLogged} = auth;

    const dispatch = useDispatch();

    const handleLogout = async (e: any) => {
        e.preventDefault();

        await axios.post('/user/logout');
        setMsg({msg: "Logged out!"});

        localStorage.removeItem('firstlogin');

        console.log(msg);

        dispatch(dispatchLogout());
    };

        if(isLogged) {
            return(
                <div className="header-container">
                    <Link to="/home"><li>Home</li></Link>
                    <Link to="/profile"><li>Profile</li></Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )
        } else {
            return(
                <div className="header-container">
                    <Link to="/login"><li>Login</li></Link>
                    <Link to="/signup"><li>Sign Up</li></Link>
                </div>
            )
        }
}
