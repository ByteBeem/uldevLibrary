import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    Data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setData(state, action) {
      state.Data = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setData, setLoading, setError } = dataSlice.actions;

export default dataSlice.reducer;
