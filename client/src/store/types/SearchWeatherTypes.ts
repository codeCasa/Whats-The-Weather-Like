import { CityInfo } from "../../models";
import { IAction } from "./IAction";

export enum SearchReducerKeys {
    ReducerName = "Search",
    IsSearching = "IsSearching",
    SearchResults = "SearchResults",
}

export interface SearchStore {
    [SearchReducerKeys.IsSearching]: boolean | undefined;
    [SearchReducerKeys.SearchResults]: CityInfo | undefined | null;
}

export interface SearchState {
    [SearchReducerKeys.ReducerName]: SearchStore;
}

export enum SearchActionTypes {
    SEARCH = "SEARCH",
    SET_IS_SEARCHING = "SET_IS_SEARCHING",
    SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS",
}

export type SearchAction = IAction<string, SearchActionTypes.SEARCH>;
export type SetIsSearchingAction = IAction<boolean | undefined, SearchActionTypes.SET_IS_SEARCHING>;
export type SetSearchResultsAction = IAction<CityInfo | undefined | null, SearchActionTypes.SET_SEARCH_RESULTS>;

export type UpdateSearchReducerAction = SetIsSearchingAction | SetSearchResultsAction;
