import { createReducer } from "@reduxjs/toolkit"

import { filterInitialState } from "./filterInitialState"
import { changeFilterValue } from "./actions"

export const filterReducer = createReducer(filterInitialState, {

	// квадратні дужки для передачі назви функції як рядка
	[changeFilterValue]: (state, action) => ({
				  ...state,
				  value: action.payload
				}),
})






// вирішує проблему комбайна
// export const filterReducer = (state = initialState.filterValue, action) => {
// 	switch (action.type) {
  
// 		case CHANGEFILTERVALUE:
// 		return {
// 		  ...state,
// 		  value: action.payload
// 		}
  
// 	  default:
// 		return state
// 	}
//   }


