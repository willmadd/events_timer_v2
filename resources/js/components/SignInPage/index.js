import React from 'react';

const SignInPage = () => {
    return (
        <main className="signin">
           <div className="signin__wrapper">

            <div className="signin__image">
                <img src={'/images/signin.jpg'}/>
            </div>
            <div className="signin__modal">
           <h1>Sign In To your EventsCountdown account</h1> 
                <input type="text" placeholder={'email'}/>
                <input type="password" placeholder={'password'}/>
            </div>
           </div>
        </main>
    );
};

export default SignInPage;