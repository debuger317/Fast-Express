import { authSlice } from "../slice/authSlice";

const { actions: slice } = authSlice;

<<<<<<< HEAD
// export const googleSignUpAction = (email) => {
//     (dispatch) => {
//         dispatch(slice.setlogin(email))
//     }
// }

export const googleSignUpAction = (email) => (dispatch) => {
    dispatch(slice.googleAuth(email))
}
=======
export const googleSignUpAction = (userdetails) => (dispatch) => {
    dispatch(slice.googleAuth(userdetails))
}

export const customAuthAction = (userdetails) => (dispatch) => {
    dispatch(slice.customAuth(userdetails))
}

>>>>>>> 2dcb5f58c42339d8a5a9c1c8fb2179d621f2faf7
export const logOutAction = () => (dispatch) => {
    dispatch(slice.logOut())
}