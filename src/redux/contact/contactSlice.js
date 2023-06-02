import { createSlice } from "@reduxjs/toolkit";
import { contactInitialState } from "./contactInitialState";

export const contactSlice = createSlice({
	name: 'contact',
	initialState: contactInitialState,
	reducers: {
		addContact: (state, action) => ({
			...state,
			contacts: [...state.contacts, { id: action.payload.id, name: action.payload.name, number: action.payload.number }]
		}),
		delContact: (state, action) => ({
			...state,
			contacts: action.payload
		}),
	}
})

export const contactReducer = contactSlice.reducer;

export const { addContact , delContact } = contactSlice.actions