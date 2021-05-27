// import shortId from "shortid";
// import axios from 'axios';
import { createAction } from "@reduxjs/toolkit";
// import { number } from "prop-types";


export const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
export const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
export const fetchContactsError = createAction("contacts/fetchContactsError");  

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");  

export const deleteContactRequest = createAction("contacts/deleteContactRequest");
export const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
export const deleteContactError = createAction("contacts/deleteContactError"); 


export const changeFilter = createAction("contacts/changeFilter");

// const actions = { addContactRequest, addContactSuccess, addContactError, deleteContact, filter };

// export default actions;

// / WITHOUT REDUX TOOLKIT

// import shortId from 'shortid';
// import actionTypes from './phonebook-types'

// const addContact = ({name, number}) => (
//     {
//         type: actionTypes.ADD,
//         payload: {
//              id: shortId.generate(),
//              name,
//              number
//         }
//     }
// )

// const deleteContact = (contactId) => (
//     {
//   type: actionTypes.DELETE,
//   payload: contactId,
//   })

//   const filter = (value) => ({
//     type: actionTypes.FILTER,
//     payload: value,
//   });

// export default { addContact, deleteContact, filter };
