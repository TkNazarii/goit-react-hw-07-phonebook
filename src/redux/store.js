import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { reducer as rootReducer } from "./filter/reducer";

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filterValue']
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore(
	{
	reducer: persistedReducer
}
);
 
export   const persistor = persistStore(store)