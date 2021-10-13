import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';
import axios from 'axios';

export default function Header() {

    const auth = useSelector((state: RootStateOrAny) => state.auth);

    const {isLogged} = auth;

    const handleLogout = async (e: any) => {
        e.preventDefault();

        await axios.post('/user/logout');

        localStorage.removeItem('firstlogin');

        window.location.href = '/login';
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
                    <Link to="/signup"><li>Sign Up</li></Link>
                </div>
            )
        }
}
