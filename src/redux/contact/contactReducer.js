import { createReducer } from "@reduxjs/toolkit"
import { addContact, delContact } from "./actions"
import { contactInitialState } from "./contactInitialState"

export const contactReducer = createReducer(contactInitialState, {

	[addContact]: (state, action) => ({
		...state,
		contacts: [...state.contacts, { id: action.payload.id, name: action.payload.name, number: action.payload.number }]
	}),

	[delContact]: (state, action) => ({
				  ...state,
				  contacts: action.payload
				}),
})








// вирішує проблему комбайна
// export const contactReducer = (state = initialState.allContacts, action) => {
// 	switch (action.type) {

// 	  case ADDCONTACT:
// 		return {
// 		  ...state,
// 		  contacts: [...state.contacts, { id: action.payload.id, name: action.payload.name, number: action.payload.number }]
// 		}
  
// 	  case DELCONTACT:
// 		return {
// 		  ...state,
// 		  contacts: action.payload
// 		}

// 		case STARTLOCALSTORAGE:
// 			return {
// 			  ...state,
// 			  contacts: [...action.payload]
// 			}
  
// 	  default:
// 		return state
// 	}
//   }

