import { merchantSlice } from "../slice/merchant";
const { actions: slice } = merchantSlice;

export const updateCount = (count) => (dispatch) => {
    dispatch(slice.updatedCount(count))
}
export const filterName = (filterpath) => (dispatch) => {
    dispatch(slice.filtername(filterpath))
}

export const selectedMerchant = (merchant) => (dispatch) => {
    dispatch(slice.selectedMerchant(merchant))
}