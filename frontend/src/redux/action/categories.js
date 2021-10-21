import { CategoriesSlice } from "../slice/categories";

const { actions: slice } = CategoriesSlice;

export const getCategoriesAction = (categories) => (dispatch) => {
    dispatch(slice.setCategories(categories))
}
export const filterCategoryAction = (f_name) => (dispatch) => {
    dispatch(slice.filterCategories(f_name))
}

export const removeCategoryAction = (_id) => (dispatch) => {
    dispatch(slice.removeCategories(_id))
}