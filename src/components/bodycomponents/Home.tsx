import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

export default function Home() {

    const auth = useSelector((state: RootStateOrAny) =>state.auth);

    const {isLogged} = auth;
    
    if(isLogged) {
        return(
            <div>
                This is the home when logged in.
            </div>
        )
    } else {
        return(
            <div>
                This is the home if loggedout.
            </div>
        )
    }
}