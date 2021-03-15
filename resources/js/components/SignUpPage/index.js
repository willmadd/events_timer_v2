import React, { useState } from "react";
import axios from "axios";
import { sha256 } from "js-sha256";
import { Link, useHistory } from "react-router-dom";
import RouteID from "../../routes/routeID";

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
            password: sha256(password),
            password_confirmation: sha256(confirmPassword),
            company,
            email,
        };
        axios
            .post("/api/auth/signup", data)
            .then((res) => {
                if (res.status === 201) {
                    history.push(RouteID.signupsuccess, {
                        from: "signup",
                        email: res.data.email,
                    });
                } else {
                    setError("An error occured, please try again later!");
                }
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
                <div className="signin__content__wrapper signup">
                    <div className="signin__modal signup">
                        <div className="signin__reasons">
                            <h2>Great reasons to sign up</h2>
                            <ul>
                                <li>
                                    <h3>Get access to more features</h3>
                                    <p>
                                        Get access to more features such as
                                        different backgrounds and audio tracks
                                    </p>
                                </li>
                                <li>
                                    <h3>Keep track of your videos</h3>
                                </li>
                                <li>
                                    <h3>SIgn up to get HD pro videos</h3>
                                </li>
                            </ul>
                        </div>
                        <div className="signin__form">
                            <h1>Create an Account</h1>

                            <label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder=" "
                                />
                                <span>Name</span>
                            </label>

                            <label>
                                <input
                                    type="text"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    placeholder=" "
                                />
                                <span>Company</span>
                            </label>

                            <label>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder=" "
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

                            <label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    placeholder=" "
                                />
                                <span>Confirm Password</span>
                            </label>

                            <button
                                className="primary"
                                type="button"
                                onClick={() => handleSubmit()}
                            >
                                Sign Up
                            </button>
                            <p className="signin__signup signup">
                                Already have an account?{" "}
                                <Link to={RouteID.signin}>Sign in Here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignUpPage;
