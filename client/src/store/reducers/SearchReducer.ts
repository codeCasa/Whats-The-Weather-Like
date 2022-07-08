import { extend } from "lodash";
import { singleton } from "tsyringe";
import { CityInfo } from "../../models";
import {
  SearchActionTypes,
  SearchReducerKeys,
  SearchState,
  SearchStore,
  UpdateSearchReducerAction,
} from "../types";
import { IReducer } from "./IReducer";

@singleton()
export class SearchReducer implements IReducer<SearchState, SearchStore> {
  public initialState: SearchState;
  private readonly initialValues: SearchStore = {
    [SearchReducerKeys.IsSearching]: undefined,
    [SearchReducerKeys.SearchResults]: undefined,
  };

  public constructor() {
    this.initialState = { [SearchReducerKeys.ReducerName]: this.initialValues };
  }

  public updateState = (
    store: SearchStore | undefined,
    action: UpdateSearchReducerAction
  ): SearchStore => {
    const incomingStore = store ? store : this.initialValues;
    switch (action.type) {
      case SearchActionTypes.SET_IS_SEARCHING:
        return this.setIsSearching(incomingStore, action.payload);
      case SearchActionTypes.SET_SEARCH_RESULTS:
        return this.setSearchResults(incomingStore, action.payload);
      default:
        return incomingStore;
    }
  };

  private setIsSearching = (store: SearchStore, payload?: boolean) =>
    extend({}, store, { [SearchReducerKeys.IsSearching]: payload });
  private setSearchResults = (store: SearchStore, payload?: CityInfo | null) =>
    extend({}, store, { [SearchReducerKeys.SearchResults]: payload });
}
