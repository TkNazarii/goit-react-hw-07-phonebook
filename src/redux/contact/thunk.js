import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContactApi, addContactApi, deleteContactApi } from "../../services/getContact";

export const getContactsThunk = createAsyncThunk(
  "contact/getContacts",
  async () => {
    const response = await getContactApi();
    return response;
  }
);

export const addContactsThunk = createAsyncThunk(
  "contact/addContact",
  async (contact) => {
    const response = await addContactApi(contact);
	console.log("add",response);
	// return
    return response.data;
  }
);

export const deleteContactsThunk = createAsyncThunk(
	"contact/deleteContact",
	async (id) => {
	  await deleteContactApi(id);
	//   console.log(id);
	  return id; // Повертаємо id елемента, який був видалений
	}
  );

