import React from 'react';
import { Switch, Route} from 'react-router';
import Signup from './bodycomponents/Signup';
import Login from './bodycomponents/Login';
import Home from './bodycomponents/Home';
import Notfound from './bodycomponents/Notfound';
import { useSelector, RootStateOrAny } from 'react-redux';

export default function Body() {

    const auth = useSelector((state: RootStateOrAny) => state.auth);

    const {isLogged} = auth;
    
    return (
        <Switch>
            <Route path="/signup">
                {isLogged ? <Notfound/> : <Signup/>}
            </Route>
            <Route path="/login">
                {isLogged ? <Notfound/> : <Login/>}
            </Route>
            <Route path="/home">
                <Home/>
            </Route>
        </Switch>
    )
}
