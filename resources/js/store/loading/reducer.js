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
    SUCCESSFUL_UPDATE
} from "../init/actions";

const initialState = {
    loading: false,
    error: false,
};

export const locale = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'LOCALE_LOADING':
            return {
                ...state,
                loading: true
            };

        case 'LOCALE_SUCCESS':
            console.log('locale success');
            return {
                ...state,
                ...action.payload,
                loading: false,
                error: false,
            };
        case 'LOCALE_FAILURE':
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};
