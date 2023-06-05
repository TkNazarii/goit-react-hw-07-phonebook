import { combineReducers } from "@reduxjs/toolkit"
import { contactReducer } from "./contact/contactSlice";
import { filterReducer } from "./filter/filterSlice";

// комбайн не бачить інтіалстейт!!!
export const reducer = combineReducers({
	allContacts: contactReducer,
	filterValue: filterReducer,
  });