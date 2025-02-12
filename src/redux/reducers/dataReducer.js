const initialState = {
    Data: null,
    loading: false,
    error: null,
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_FETCH_REQUEST':
            return { ...state, loading: true, error: null };
        case 'DATA_FETCH_SUCCESS':
            return { ...state, loading: false, Data: action.payload, error: null };
        case 'DATA_FETCH_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;  
    }
};

export default dataReducer;
