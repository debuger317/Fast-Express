import { authSlice } from "../slice/authSlice";

const { actions: slice } = authSlice;

export const googleSignUpAction = (authdetails) => (dispatch) => {
    dispatch(slice.googleAuth(authdetails))
}

export const customAuthAction = (authdetails) => (dispatch) => {
    dispatch(slice.customAuth(authdetails))
}
export const merchantAuthAction = (merchantdetails) => (dispatch) => {
    dispatch(slice.merchnatAuth(merchantdetails))
}

export const logOutAction = () => (dispatch) => {
    dispatch(slice.logOut())
}