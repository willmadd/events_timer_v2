import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./editPassword.scss";
import sha256 from "js-sha256";
import axios from "axios";

const EditPassword = ({ setPath }) => {
    const [error, setError] = useState("");

    const [success, setSuccess] = useState(false);

    const { register, handleSubmit, watch, errors, getValues } = useForm();
    const onSubmit = (input) => {
        let data = {
            password: sha256(input.password),
            newPassword: sha256(input.new_password),
        };
        const token = localStorage.getItem("eventcountdown:all:userToken");
        const headers = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios
            .post("/api/auth/tbsndkf", data, headers)
            .then((res) => {
                setSuccess(true);
            })
            .catch((e) => {
                console.log(e.response.status);
                if (e.response.status) {
                    setError("Your Password is incorrect");
                }
            });
    };
    if (success) {
        return <Success />;
    } else {
        return (
            <div className="edit-password">
                <h3>{`Change Password`}</h3>
                <form
                    className="edit-password__form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="edit-password__input-wrapper current">
                        <label htmlFor="password">Current Password</label>
                        <div className="edit-password__wrapper">
                            <input
                                type="password"
                                name="password"
                                ref={register({ required: true, minLength: 8 })}
                            />
                            {error ? (
                                <p className="error">{error}</p>
                            ) : (
                                errors.password && (
                                    <p className="error">
                                        Please Enter your password
                                    </p>
                                )
                            )}
                        </div>
                    </div>
                    <div className="edit-password__input-wrapper  password">
                        <label htmlFor="new_password">
                            New Password
                            <p>
                                Should contain at least 8 characters including
                                at least one numeric digit, one special
                                character, one uppercase, and one lowercase
                                letter.
                            </p>
                        </label>
                        <div>
                            <input
                                type="password"
                                name="new_password"
                                ref={register({
                                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+,.\\\/;':"-]).{8,}$/i,
                                })}
                            />
                        </div>
                        {errors.new_password && (
                            <p className="error">
                                Your password should be 8 characters, and
                                include an upper and lowercase letter and a
                                number
                            </p>
                        )}
                    </div>
                    <div className="edit-password__input-wrapper">
                        <label htmlFor="new_password">
                            Confirm New Password
                        </label>
                        <input
                            name="confirm_new_password"
                            type="password"
                            ref={register({
                                validate: (value) =>
                                    value === getValues("new_password"),
                            })}
                        />
                        {errors.confirm_new_password && (
                            <p className="error">Passwords should match</p>
                        )}
                    </div>
                    <div className="button__container">
                        <button
                            className="secondary icon icon__close"
                            type="button"
                            onClick={() => setPath(null)}
                        >
                            Cancel
                        </button>
                        <button
                            className="primary icon icon__proceed"
                            type="submit"
                        >
                            Change
                        </button>
                    </div>
                </form>
            </div>
        );
    }
};

export default EditPassword;

const Success = () => {
    return<h3>Your password has been successfully changed</h3>
};
