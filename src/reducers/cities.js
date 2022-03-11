import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchCities = createAsyncThunk('cities', async (value) => {
  let url = `${process.env.REACT_APP_API_URL}routes/cities?name=${value}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const initialState = {
  cities: [],
  status: 'idle',
};

const cities = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    clearCities(state) {
      state.cities = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCities.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        if (action.payload.error) {
          return state; // TODO выводить ошибку?
        }
        // console.log(action.payload);
        state.cities = [...action.payload];
        state.status = 'succeeded';
      });
  },
});

export { fetchCities };
export const { clearCities } = cities.actions;

export default cities;
