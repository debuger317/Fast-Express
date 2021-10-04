import { authSlice } from "../slice/authSlice";

const { actions: slice } = authSlice;

// export const googleSignUpAction = (email) => {
//     (dispatch) => {
//         dispatch(slice.setlogin(email))
//     }
// }

export const googleSignUpAction = (email) => (dispatch) => {
    dispatch(slice.googleAuth(email))
}

export const logOutAction = () => (dispatch) => {
    dispatch(slice.logOut())
}