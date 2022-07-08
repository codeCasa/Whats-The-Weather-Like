import { AllEffect } from "redux-saga/effects";

export interface ISaga {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    watcher: () => Generator<AllEffect<any>, void, unknown>;
}
