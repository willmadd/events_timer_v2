import React, {useState} from 'react';

import axios from 'axios';
import sha256 from 'js-sha256';
import { useDispatch } from "react-redux";
import { initUser } from "../../store/init/actions";
import { useHistory } from "react-router-dom";
import RouteID from '../../routes/routeID';


const SignInPage = () => {

    const history=useHistory();

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit=()=>{
        const remember_me = true;
        const data={
            email,
            password:sha256(password),
            remember_me
        };
        axios.post('/api/auth/login', data)
        .then(res=>{
            console.log(res);
            localStorage.setItem("eventcountdown:all:userToken", res.data.access_token);
            dispatch(initUser(res.data.access_token));
            history.push(RouteID.memberDashboard)
        })
        .catch(e=>{
            console.log(e);
        })
    }

    return (
        <main className="signin">
           <div className="signin__wrapper">

            <div className="signin__image">
                <img src={'/images/signin.jpg'}/>
            </div>
            <div className="signin__modal">
           <h1>Sign In To your EventsCountdown account</h1> 
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder={'email'}/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder={'password'}/>
                <button type="button" onClick={handleSubmit}>Sign In</button>
            </div>
           </div>
        </main>
    );
};

export default SignInPage;