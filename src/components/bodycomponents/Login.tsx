import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dispatchLogin } from '../../redux/Actions/authActions';
import axios from 'axios';

const initialState = {
    email: "",
    password: "",
    err: "",
    success: ""
};

export default function Login() {

    const [user, setUser] = useState(initialState);

    const {email, password, err, success} = user;

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await axios.post('/user/login', {email, password});
            setUser({...user, err: "", success: "Welcome!"});
            dispatch(dispatchLogin());

            localStorage.setItem('firstlogin', 'true');

            history.push('/home');

        } catch (err: any) {
            console.log(err);
            setUser({...user, err: "There's a problem logging in", success: ''})
        }
    };

    const handleInput = (e: any) => {
        const {name, value} = e.target;
        setUser({...user, [name]:value, err: "", success: ""})
    }

    return (
        <div className="login-container">
            {err && err}
            {success && success}
            <form className="login-form" onSubmit={handleSubmit}>
                <input type="email" placeholder="Account email address" name="email" value={email} onChange={handleInput}/>
                <input type="password" placeholder="Password" name="password" value={password} onChange={handleInput}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
};