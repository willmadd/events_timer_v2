import React from "react";

const SignUpSuccess = ({history}) => {
    return (
        <div>

            <div className="success-message">
            <h3>{`Thank you for signing up with Trails Hub`}</h3>
            <p>{`We've sent an email to ${history.location.state.email}, please check your email and verify your account!`}</p>
            </div>
        </div>
    );
};

export default SignUpSuccess;
