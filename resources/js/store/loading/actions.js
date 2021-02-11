import axios from "axios";

export const LOCALE_LOADING = "LOCALE_LOADING";
export const LOCALE_SUCCESS = "LOCALE_SUCCESS";
export const LOCALE_FAILURE = "LOCALE_FAILURE";
export const UPDATE = "UPDATE";
export const SUCCESSFUL_UPDATE = "SUCCESSFUL_UPDATE";

export const locale = (token) => {
    return (dispatch) => {
        dispatch({ type: LOCALE_LOADING });
        return axios
            .get(`https://ipapi.co/json`)
            .then((res) => dispatch({ type: LOCALE_SUCCESS, payload: res.data }))
            .catch((err) => dispatch({ type: LOCALE_FAILURE, payload: err }));
    };
};
