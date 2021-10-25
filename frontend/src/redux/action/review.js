import { reviewSlice } from "../slice/review";

const { actions: slice } = reviewSlice;

export const fetchReviewAction = (data) => (dispatch) => {
    dispatch(slice.fecthReview(data))
}