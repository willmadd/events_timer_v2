// import { GET_USER_DETAILS } from "./types";

// const initialStateU = {};

// export const userData = (state = initialStateU, {type, payload}) => {
//     console.log('userdata');
//     console.log(type);
//     console.log(payload);
//     switch (type) {
//         case GET_USER_DETAILS:
//             return {...payload};
//         default:
//             return state;
//     }
// }

import {
    LOADING,
    SUCCESS,
    FAILURE,
    UPDATE,
    SUCCESSFUL_UPDATE,
    LOGOUT
} from "../init/actions";

const initialState = {
    loading: false,
    error: false,
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
            };

        case SUCCESS:
            return {
                ...state,
                ...action.payload,
                loading: false,
                error: false,
            };
        case FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case LOGOUT:
            console.log('logout');
            return {
                user:{},
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};
