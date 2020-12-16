import { v4 } from 'uuid';
import { CREATEBOOK, REMOVEBOOK, CHANGEFILTER, FETCH_CATS_PENDING, FETCH_CATS_SUCCESS, FETCH_CATS_ERROR } from '../types';

export const createBook = book => {
/* eslint-disable global-require */
  const random = require('random-name');
  const newBook = {
    ...book,
    id: v4(),
    author: random(),
  };
  return {
    type: CREATEBOOK,
    payload: newBook,
  };
};

export const deleteBook = book => ({
  type: REMOVEBOOK,
  payload: book,
});

export const changeFilter = filter => ({
  type: CHANGEFILTER,
  filter,
});

export const fetchCatsPending = () => ({
  type: FETCH_CATS_PENDING,
});

export const fetchCatsSuccess = () => ({
  type: FETCH_CATS_SUCCESS,
  cats: cats,
});

export const fetchCatsError = () => ({
  type: FETCH_CATS_ERROR,
  error: error,
})
