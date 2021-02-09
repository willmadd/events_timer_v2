import React, { useState, useEffect } from "react";
import SignInPage from '../SignInPage';
import { Link } from "react-router-dom";

const SignUpActivate = ({match}) => {

    const [message, setMessage] = useState("");

    let { token } = match.params;

    useEffect(() => {
        console.log('use effect');
        axios.get(`/api/auth/signup/activate/${token}`)
            .then(res => {
                console.log(res);
                setMessage(
                    `Thanks for Signing up. Your account has now been activated. Please sign in to continue!`
                );
            })
            .catch(error => {
                if (error.response) {
                    switch (error.response.status) {
                        case 404:
                            setMessage(
                                "Could not activate you account. Your token is invalid!"
                            );
                            break;
                        default:
                            setMessage(
                                "There was an error activating our account!"
                            );
                    }
                } else {
                    setMessage(
                        "Could not connect to the server. Please check your internet connection"
                    );
                }
            });
    }, []);

    return (
        <div>
            <h3>{message}</h3>
            {/* <SignInPage /> */}
            <Link to={'/signin'} >Click here to sign in </Link>
        </div>
    );
};

export default SignUpActivate;