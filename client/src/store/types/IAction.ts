export interface IBaseAction<IActionType> {
    type: IActionType;
}

export interface IAction<TPayload, TActionType> extends IBaseAction<TActionType> {
    payload: TPayload;
}
