import { contactInitialState } from "./contact/contactInitialState"
import { filterInitialState } from "./filter/filterInitialState"
export const initialState = {
	allContacts: contactInitialState,
	filterValue: filterInitialState,
}