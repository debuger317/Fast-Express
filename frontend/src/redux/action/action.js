import { authSlice } from "../slice/authSlice";

const { actions: slice } = authSlice;

export const googleSignUpAction = (userdetails) => (dispatch) => {
    dispatch(slice.googleAuth(userdetails))
}

export const customAuthAction = (userdetails) => (dispatch) => {
    dispatch(slice.customAuth(userdetails))
}

export const logOutAction = () => (dispatch) => {
    dispatch(slice.logOut())
}