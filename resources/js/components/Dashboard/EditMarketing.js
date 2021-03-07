import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./editMarketing.scss";

const EditMarketing = ({ newsletter, setPath }) => {
    const [newsletterSubscribe, setNewsletterSubscribe] = useState(newsletter);

    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        const token = localStorage.getItem("eventcountdown:all:userToken");
        const headers = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const data = {
            newsletter: newsletterSubscribe,
        };
        axios
            .post("/api/auth/newsletter", data, headers)
            .then((res) => {
                setMessage("Your newsletter preferences have been saved");
                // console.log(res);
                //need to init user here

            })
            .catch((e) => {
                setMessage("An error occured and your preferences could not be updated. Please try again");
                console.log(e);
            });
    };

    return (
        <div className="notifications">
            <h3>Change my notification preferences</h3>
            {/* <h4>Receive Newsletter</h4> */}
            <div className="notifications__wrapper">
                <input
                    type="checkbox"
                    onClick={() => setNewsletterSubscribe(!newsletterSubscribe)}
                    checked={newsletterSubscribe}
                />
                <p>Receive our very infrequent newsletter</p>
            </div>
            {message?<p>{message}</p>:
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
                type="button"
                disabled={newsletter === newsletterSubscribe}
                onClick={()=>handleSubmit()}
            >
                Confirm Changes
            </button>
            
        </div>
            
            }
            
        </div>
    );
};

// export default EditMarketing;

const mapStateToProps = (state) => {
    return {
        newsletter: state.user.newsletter,
    };
};

export default connect(mapStateToProps)(EditMarketing);
