import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchRoutes = createAsyncThunk('cities', async (query) => {
  console.log('fetchRoutes createAsyncThunk');
  // let url = `${process.env.REACT_APP_API_URL}routes?${query}`;
  let url = `${process.env.REACT_APP_API_URL}routes?from_city_id=6212d3c15fc56b48553d43bc&to_city_id=6212d3c15fc56b48553d43bd`;
  // console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const initialState = {
  routes: [],
  status: 'idle',
  options: {
    from_city_id: null,             // Идентификатор города, откуда планируется путешествие (обязательный)
    to_city_id: null,               // Идентификатор города, куда планируется путешествие (обязательный)
    date_start: null,               // Дата отбытия туда (в формате YYYY-MM-DD; например 2030-03-01)
    date_end: null,                 // Дата отбытия обратно (в формате YYYY-MM-DD; например 2030-03-01)
    date_start_arrival: null,       // Дата прибытия туда (в формате YYYY-MM-DD; например 2030-03-01)
    date_end_arrival: null,         // Дата прибытия обратно (в формате YYYY-MM-DD; например 2030-03-01)
    have_first_class: false,        // Люкс (true/false)
    have_second_class: false,       // Купе (true/false)
    have_third_class: false,        // Плацкарт (true/false)
    have_fourth_class: false,       // Сидячее место (true/false)
    have_wifi: false,               // Имеется WiFi (true/false)
    have_air_conditioning: false,   // Имеется кондиционер (true/false)
    have_express: false,            // Экспресс (true/false)
    price_from: 0,                  // Цена от
    price_to: 0,                    // Цена до
    start_departure_hour_from: 0,   // Час отбытия от (число)
    start_departure_hour_to: 0,     // Час отбытия до (число)
    start_arrival_hour_from: 0,     // Час прибытия от (число)
    start_arrival_hour_to: 0,       // Час прибытия до (число)
    end_departure_hour_from: 0,     // Час отбытия назад от (число)
    end_departure_hour_to: 0,       // Час отбытия назад до (число)
    end_arrival_hour_from: 0,       // Час прибытия назад от (работает при установленном параметре date_end)
    end_arrival_hour_to: 0,         // Час прибытия назад до (работает при установленном параметре date_end)
    limit: 5,                       // Количество результатов на странице
    offset: 0,                      // Количество результатов, которое необходимо пропустить в выдаче
    sort: 'date',                   // Сортировка результатов (date, price, duration)
  },
};

const routes = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    changeOption(state, action) {
      const options = action.payload;
      for (const prop in options) {
        if (Object.hasOwnProperty.call(options, prop)) {
          state.options[prop] = options[prop];
        }
      }
    },
    resetRoutesState() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoutes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRoutes.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchRoutes.fulfilled, (state, action) => {
        console.log('fetchRoutes.fulfilled',action.payload)
        if (action.payload.error) {
          return state; // TODO выводить ошибку?
        }
        state.routes = [...action.payload];
        state.status = 'succeeded';
      });
  },
});

export { fetchRoutes };
export const { changeOption, resetRoutesState } = routes.actions;

export default routes;
