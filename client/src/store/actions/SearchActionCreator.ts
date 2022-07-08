import { singleton } from "tsyringe";
import { CityInfo } from "../../models";
import { SearchAction, SearchActionTypes, SetIsSearchingAction, SetSearchResultsAction } from "../types";

@singleton()
export class SearchActionCreator {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public constructor() {}

    public search = (payload: string): SearchAction => ({
        payload,
        type: SearchActionTypes.SEARCH,
    });
    public setIsSearching = (payload?: boolean): SetIsSearchingAction => ({
        payload,
        type: SearchActionTypes.SET_IS_SEARCHING,
    });
    public setSearchResults = (payload?: CityInfo | null): SetSearchResultsAction => ({
        payload,
        type: SearchActionTypes.SET_SEARCH_RESULTS,
    });
}
