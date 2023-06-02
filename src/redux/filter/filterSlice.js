import { createSlice } from "@reduxjs/toolkit";
import { filterInitialState } from "./filterInitialState";

export const filterSlice = createSlice({
	name: 'filter',
	initialState: filterInitialState,
	reducers: {
		changeFilterValue: (state, action) => ({
			...state,
			value: action.payload
		}),
	}
})

export const filterReducer = filterSlice.reducer;

export const { changeFilterValue  } = filterSlice.actions