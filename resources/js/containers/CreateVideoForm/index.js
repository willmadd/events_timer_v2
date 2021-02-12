import { connect } from "react-redux";
import CreateVideoForm from "../../components/CreateVideoForm";

const mapStateToProps = state => {
    return {
        loggedin:state.user.active,
        userCurrency: state.locale.currency
    };
};

export default connect(mapStateToProps)(CreateVideoForm);
