import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./shoppingCart_redux";
import userReducer from "./user_redux";
import productReducer from "./product_redux";
import storage from "redux-persist/lib/storage";
import {
persistStore,
persistReducer,
FLUSH,
REHYDRATE,
PAUSE,
PERSIST,
PURGE,
REGISTER,
} from "redux-persist";

const persistConfig = {
key: "root",
version: 1,
storage,
};

const rootReducer = combineReducers({
    user: userReducer,
    cart : cartReducer,
    product: productReducer,
});



const persistedReducer = persistReducer(persistConfig, rootReducer);

export const ulteamStore = configureStore({
reducer: persistedReducer,
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    }),
});

export let persistor = persistStore(ulteamStore);
