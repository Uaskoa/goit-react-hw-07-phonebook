import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import actionTypes from "./phonebook-types";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from "./phonebook-actions";



const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});

///WITHOUT REDUX TOOLKIT
// import {combineReducers} from 'redux';
// import actionTypes from './phonebook-types'

// const items=(state=[], {type, payload}) => {
//   switch(type) {
// case actionTypes.ADD:
//   return [...state, payload];

//     case actionTypes.DELETE:
//   return state.filter(contact => contact.id !== payload);

//     default:
//     return state;

//   }

// }

// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//       case actionTypes.FILTER:
//         return payload;

//       default:
//         return state;
//     }
// };

// export default combineReducers({
//     items,
//     filter
// })
