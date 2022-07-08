import { spawn } from "redux-saga/effects";
import { SearchSaga } from "./SearchSaga";

export const rootSaga = function* rootSaga() {
    yield spawn(SearchSaga.getSaga().watcher);
};
