import { createAction } from "@reduxjs/toolkit"

// export const addContact = (data) => ({type: ADDCONTACT,payload: data})
// export const delContact = (data) => ({type: DELCONTACT,payload: data})

export const addContact = createAction('ADDCONTACT')
export const delContact = createAction('DELCONTACT')
