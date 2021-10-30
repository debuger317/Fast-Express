import { dashboardSlice } from "../slice/dashboard";

const { actions: slice } = dashboardSlice;

export const BackToHomeAction = (props) => (dispatch) => {
    dispatch(slice.BacktoHome(props))
}

export const SideBarAction = (props) => (dispatch) => {
    dispatch(slice.openMenu(props))
}

