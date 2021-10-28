// import { userOrderSlice } from "../slice/merchant";
import { userOrderSlice } from '../slice/userOrderListsSlice';

const { actions } = userOrderSlice;
// console.log(slice);
export const userOrderAction = (data) => (dispatch) => {
    dispatch(actions.userorderlists(data))
}

export const userorderAction = (data) => (dispatch) => {
    dispatch(actions.userorderlists(data))
}

export const RemoveuserorderAction = (data) => (dispatch) => {
    dispatch(actions.userorderlists(data))
}

