import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

export default function Profile() {

    const auth = useSelector((state: RootStateOrAny) => state.auth);
    const {username, city, province, country} = auth.user[0];

    
    return (
        <div>
            <p>Name: {username}</p>
            <p>City: {city}</p>
            <p>Province: {province}</p>
            <p>Country: {country}</p>
        </div>
    )
}
