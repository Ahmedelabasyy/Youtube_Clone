import { configureStore , getDefaultMiddleware,combineReducers} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {
    persistStore,
    persistReducer,
} from 'redux-persist';

import themeSlice from './slices/themeSlice';
import { youtubeV3 } from "./slices/youtubeV3Slice";
import statesSlice from "./slices/statesSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["theme","states"]
}


const rootReducer = combineReducers({
    [youtubeV3.reducerPath]: youtubeV3.reducer,
    theme: themeSlice,
    states: statesSlice,
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)