import { usersSlice } from './../slice/users';

const { actions } = usersSlice;
// console.log(slice);PhotoUrl
export const userlistAction = (data) => (dispatch) => {
    dispatch(actions.userlist(data))
}
export const PhotoUrlAction = (url) => (dispatch) => {
    dispatch(actions.PhotoUrl(url))
}

export const userorderAction = (data) => (dispatch) => {
    dispatch(actions.userorderlists(data))
}

export const RemoveuserorderAction = (data) => (dispatch) => {
    dispatch(actions.userorderlists(data))
}

export const RemoveuserAction = () => (dispatch) => {
    dispatch(actions.removeAUserFromUserlist())
}

