import { connect } from "react-redux";
import CreateVideoForm from "../../components/CreateVideoForm";

const mapStateToProps = state => {
    return {
        loggedin:state.user.active,
    };
};

export default connect(mapStateToProps)(CreateVideoForm);
