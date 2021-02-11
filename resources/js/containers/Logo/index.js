import { connect } from "react-redux";
import Logo from "../../components/Logo";

const mapStateToProps = state => {
    return {
        ...state.locale,
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         toggleUnits: (bool) => {
//             return dispatch(config({imperial:bool}))}
//     }
//   }


export default connect(mapStateToProps)(Logo);
