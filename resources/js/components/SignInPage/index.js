import React, { useState } from "react";

import axios from "axios";
import sha256 from "js-sha256";
import { useDispatch } from "react-redux";
import { initUser } from "../../store/init/actions";
import { useHistory } from "react-router-dom";
import RouteID from "../../routes/routeID";
import { useForm } from "react-hook-form";

const SignInPage = () => {
    const { register, handleSubmit, watch, errors, getValues } = useForm();

    const history = useHistory();

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const onSubmit = (input) => {
        const remember_me = true;
        const data = {
            email: input.email,
            password: sha256(password),
            remember_me,
        };
        console.log({
            original: password,
            sha: sha256(password),
        });
        axios
            .post("/api/auth/login", data)
            .then((res) => {
                localStorage.setItem(
                    "eventcountdown:all:userToken",
                    res.data.access_token
                );
                dispatch(initUser(res.data.access_token));
                history.push(RouteID.memberDashboard);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <main className="signin">
            <div className="signin__wrapper">
                <div className="signin__image">
                    <img src={"/images/signin.jpg"} />
                </div>
                <div className="signin__content__wrapper">
                    <div className="signin__modal">
                        <h1>Welcome Back</h1>
                        {/* <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={"email"}
                        /> */}
                        <form
                            className="signin__form"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <label>
                                <input
                                    type="text"
                                    name="email"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    placeholder=" "
                                    ref={register({
                                        required: "Required",
                                        pattern: {
                                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                          message: "invalid email address"
                                        }
                                    })}
                                />
                                <span>Email</span>
                            </label>
                            <label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder=" "
                                />
                                <span>Password</span>
                            </label>

{                            errors.email && (
                                    <p className="error">
                                        Please Enter a Valid Email Address
                                    </p>
                                )}

                            <button
                                className="primary"
                                type="submit"
                                // onClick={onSubmit}
                            >
                                Sign In
                            </button>
                        </form>
                        <a href="/forgotpassword" className="forgot-password">
                            Forgot Your Password
                        </a>
                    </div>
                    <div className="signin__signup">
                        <p>
                            Don't have an account? <a href="/signup">Sign Up</a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignInPage;
