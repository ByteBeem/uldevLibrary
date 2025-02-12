import axios from "axios";

const url = "http://localhost:5092"; 
const prodURL = "libararyserver-a2bvbtdwbpa9ddab.southafricanorth-01.azurewebsites.net";

export const fetchData = (course) => async (dispatch) => {
    dispatch({ type: "DATA_FETCH_REQUEST" });

    try {
        const response = await axios.get(`${prodURL}/api/courses`, {
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
