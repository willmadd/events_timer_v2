import { GET_USER_DETAILS } from "./types";

const initialState = {};


export const userData = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_USER_DETAILS:
            return {...payload};
        default:
            return state;
    }
}