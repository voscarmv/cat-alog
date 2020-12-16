import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';
import catsReducer from './cats';

export default combineReducers({
  bookStoreState: booksReducer,
  filterStoreState: filterReducer,
  catStoreState: catsReducer,
});
