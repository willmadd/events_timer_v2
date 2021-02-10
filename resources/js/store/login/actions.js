import axios from "axios";
import { GET_USER_DETAILS } from "./types";

export const getUserData = (token) => {
    console.log("getuser data");
    return (dispatch) => {
        axios.get(`/api/auth/user`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }.then((res) =>
                dispatch({
                    type: GET_USER_DETAILS,
                    payload: res.data.user,
                })
            ),
        });
    };
};
