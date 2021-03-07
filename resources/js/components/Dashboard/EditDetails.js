import React, {useState} from "react";
import EditPassword from "./EditPassword";
import './editDetails.scss'
import EditPaymentDetails from "./EditPaymentDetails";
import EditMarketing from "./EditMarketing";
import { connect } from "react-redux";

const EditDetails = ({stripeCustomer}) => {
    const [path, setPath] = useState(null);
    return (
        <div className="edit-details">
            <h2>Edit My Account Details</h2>
            <div className={`edit-details__tab-wrapper`}>

            <button type="button" className={`tab icon icon__lock ${path==='password'?'active':'inactive'}`} onClick={()=>setPath("password")}>
                Change Password
            </button>
            {stripeCustomer && <button type="button" className={`tab icon icon__credit-card payment ${path==='payment'?'active':'inactive'}`} onClick={()=>setPath("payment")}>
                Update Payment Details
            </button>}
            <button type="button" className={`tab icon icon__bell payment ${path==='newsletter'?'active':'inactive'}`} onClick={()=>setPath("newsletter")}>
                Notifications
            </button>
            </div>
            {path==="password"&&<EditPassword setPath={setPath}/>}
            {path==="payment"&&<EditPaymentDetails setPath={setPath}/>}
            {path==="newsletter"&&<EditMarketing setPath={setPath}/>}
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        stripeCustomer: state.user.stripe_id,
    };
};

export default connect(mapStateToProps)(EditDetails);
0