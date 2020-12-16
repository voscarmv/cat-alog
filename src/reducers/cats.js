import { FETCH_CATS_PENDING, FETCH_CATS_SUCCESS, FETCH_CATS_ERROR } from '../types';
import catsInitialState from './initialStates';

export default (state = catsInitialState, action) => {
  switch(action.type) {
      case FETCH_CATS_PENDING: 
          return {
              ...state,
              pending: true
          }
      case FETCH_CATS_SUCCESS:
          return {
              ...state,
              pending: false,
              CATS: action.payload
          }
      case FETCH_CATS_ERROR:
          return {
              ...state,
              pending: false,
              error: action.error
          }
      default: 
          return state;
  }
}