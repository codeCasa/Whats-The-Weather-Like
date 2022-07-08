import { IAction } from "../types";

export interface IReducer<State, Store> {
    initialState: State;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateState: <T extends IAction<any, any>>(store: Store | undefined, action: T) => Store;
}
