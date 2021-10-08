import React from 'react';
import { useDispatch } from 'react-redux';
import { dispatchLogin } from '../../redux/Actions/authActions';

export default function Login() {

    const dispatch = useDispatch();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        dispatch(dispatchLogin());
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <input type="email" placeholder="Account email address"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
};