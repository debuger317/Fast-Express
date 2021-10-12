import { dashboardSlice } from "../slice/dashboard";

const { actions: slice } = dashboardSlice;

export const BackToHomeAction = (props) => (dispatch) => {
    dispatch(slice.BacktoHome(props))
}

