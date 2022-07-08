import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { initialState, rootReducer } from "./reducers";
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
export const sagaMiddleWare = createSagaMiddleware();
const middleWares = [sagaMiddleWare];
export const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: middleWares,
    devTools: isDev,
});
