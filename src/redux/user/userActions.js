import { SET_AUTHENTICATED_USER } from "./userActionTypes";

// action creator

export const setCurrentuser = user => ({
    type: SET_AUTHENTICATED_USER,
    payload:user
});

