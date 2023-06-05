import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer,  FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { reducer as rootReducer } from "./reducer";

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filterValue']
}
//  мідл вере під капотом
// const costomMiddle = (state) => {
// 	return (next) => {
// 		return (action) => {
// 			if (typeof action === 'function') {
// 				console.log(123123);
// 				action(state.dispatch)
// 				return
// 			}
// 			return next(action)
// 		}
// 	}
// }
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore(
	{
	reducer: persistedReducer,
	// middleware: [costomMiddle],
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
	}
);
 
export   const persistor = persistStore(store)