// import { createAction, } from "@reduxjs/toolkit"

// import { fetchError, fetchSuccess, fetching } from "./contactSlice"

// export const addContact = (data) => ({type: ADDCONTACT,payload: data})
// export const delContact = (data) => ({type: DELCONTACT,payload: data})

// export const addContact = createAction('ADDCONTACT')
// export const delContact = createAction('DELCONTACT')

// export const contactReducerApi = () => {
// 	return async (dispatch) => {
// 		try {
// 	dispatch(fetching)
// 	const data = await getContacts()
// 	dispatch(fetchSuccess(data))
// 		} catch (error) {
// 			dispatch(fetchError(error))
// 		}
// 	  }
// }


