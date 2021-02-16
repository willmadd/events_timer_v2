import { connect } from "react-redux";
import Header from "../../components/Header";

const mapStateToProps = state => {
    return {
        loggedin:state.user.active,
    };
};

export default connect(mapStateToProps)(Header);
