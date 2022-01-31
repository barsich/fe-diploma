import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cities from '../reducers/cities';

const reducer = combineReducers({
  cities: cities.reducer,
});
// const reducer = combineReducers({
//   topItemListReducer: topItemList.reducer,
//   itemListReducer: itemList.reducer,
//   categoriesListReducer: categoriesList.reducer,
//   cartItemListReducer: cartItemList.reducer,
// });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
