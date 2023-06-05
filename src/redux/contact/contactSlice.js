import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { contactInitialState } from "./contactInitialState";
import { addContactsThunk, deleteContactsThunk, getContactsThunk } from "./thunk";

const customArr = [getContactsThunk, addContactsThunk, deleteContactsThunk];

const foo = (status) => customArr.map((el) => el[status]);

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected'
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
  const filteredItems = state.items.filter((item) => item.id !== action.payload);
  state.items = filteredItems;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.items = [];
  state.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'myContacts',
  initialState: contactInitialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(...foo(defaultStatus.pending)), handlePending)
      .addMatcher(isAnyOf(...foo(defaultStatus.fulfilled)), handleFulfilled)
      .addMatcher(isAnyOf(...foo(defaultStatus.rejected)), handleRejected);
  },
});

export const contactReducer = contactSlice.reducer;
