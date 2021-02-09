import React, {useState} from 'react';
import axios from 'axios';
import { sha256 } from "js-sha256";
import { useHistory } from "react-router-dom";
import RouteID from '../../routes/routeID';

const SignUpPage = () => {

    const history = useHistory();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {

        const data = {
            name,
            password:sha256(password),
            password:sha256(confirmPassword),
            company,
            email
        }
        axios.post('/api/auth/signup', data)
        .then(res=>{
            console.log(res);
            if (res.status === 201) {
                history.push(RouteID.signupsuccess, {from:"signup",email:res.data.email})
            } else {
                setError( "An error occured, please try again later!");
            }
        })
        .catch(e=>{
            console.log(e)
        });
    }

    return (
        <main className="signin">
           <div className="signin__wrapper">

            <div className="signin__image">
                <img src={'/images/signin.jpg'}/>
            </div>
            <div className="signin__modal">
           <h1>Create an Events Countdown Account</h1> 
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder={'Name'}/>
                <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder={'Company'}/>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder={'Email'}/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder={'Password'}/>
                <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder={'Confirm Password'}/>
                <button type="button" onClick={()=>handleSubmit()}>Sign Up</button>
            </div>
           </div>
        </main>
    );
};

export default SignUpPage;