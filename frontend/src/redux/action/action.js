import { authSlice } from "../slice/authSlice";

const { actions: slice } = authSlice;

// export const googleSignUpAction = (email) => {
//     (dispatch) => {
//         dispatch(slice.setlogin(email))
//     }
// }

export const googleSignUpAction = (userdetails) => (dispatch) => {
    dispatch(slice.googleAuth(userdetails))
}

export const logOutAction = () => (dispatch) => {
    dispatch(slice.logOut())
}