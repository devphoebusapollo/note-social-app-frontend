import React, {useEffect} from 'react';
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import {dispatchLogin, fetchUser, dispatchGetUser} from './redux/Actions/authActions';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';
import axios from 'axios';

/*interface AppProp {
  header: string,
  body?: string //This means this property is optional. It can either be defined or undefined
}*/

//This is how we destructure the props and giving default values to a prop in case it's undefined
function App() {

  const dispatch = useDispatch();
  const auth = useSelector((state: RootStateOrAny) => state.auth);
  const token = useSelector((state: RootStateOrAny) => state.token);

  useEffect(() => {

    const firstlogin = localStorage.getItem('firstlogin');

    if(firstlogin) {
      const getUserToken = async () => {
        const res: any = await axios.post('/user/refresh_token', null);

        dispatch({type: "GET_TOKEN", payload: res.data.access_token});
      };
      getUserToken();
    }

  }, [auth.isLogged, dispatch]);

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatchLogin());
        return fetchUser(token).then(res => {
            dispatch(dispatchGetUser(res))
        });
      }
      getUser();
    }
  },[token, dispatch]);

  return (
    <Router>
      <div className="App">
        <Header/>
        <Body/>
      </div>
    </Router>
  );
}

export default App;
