import { SET_AUTHENTICATED_USER } from "./userActionTypes";

// action creator

export const setCurrentUser = user => ({
    type: SET_AUTHENTICATED_USER,
    payload:user
});


