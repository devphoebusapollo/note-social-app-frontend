import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

const Home: React.FC = () => {

    const auth = useSelector((state: RootStateOrAny) => state.auth);
    const username = auth?.user[0]?.username;

    return(
        <div>
            Welcome {username}!
        </div>
    )
};

export default Home;