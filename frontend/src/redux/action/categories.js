import { CategoriesSlice } from "../slice/categories";

const { actions: slice } = CategoriesSlice;

export const getCategoriesAction = (categories) => (dispatch) => {
    dispatch(slice.setCategories(categories))
}