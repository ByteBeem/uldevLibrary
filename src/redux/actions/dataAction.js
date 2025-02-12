import axios from "axios";

const url = "http://localhost:5092"; // Your API base URL

export const fetchData = (course) => async (dispatch) => {
    dispatch({ type: "DATA_FETCH_REQUEST" });

    try {
        const response = await axios.get(`${url}/api/courses`, {
            params: { name: course },
            headers: {
                "Content-Type": "application/json",
            },
        });

        dispatch({
            type: "DATA_FETCH_SUCCESS",
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: "DATA_FETCH_FAILURE",
            payload: error.response?.data?.message || error.message || "Failed to fetch data",
        });
    }
};

export const clearError = () => ({
    type: "CLEAR_ERROR",
});
