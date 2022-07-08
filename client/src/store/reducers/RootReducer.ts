import { combineReducers } from "redux";
import { container } from "tsyringe";
import { SearchReducerKeys, SearchStore } from "../types";
import { SearchReducer } from "./SearchReducer";

const searchReducer = container.resolve(SearchReducer);

export const rootReducer = combineReducers({
    [SearchReducerKeys.ReducerName]: searchReducer.updateState,
});

export const initialState = {
    ...searchReducer.initialState,
};

export interface ApplicationReduxState {
    [SearchReducerKeys.ReducerName]: SearchStore;
}
