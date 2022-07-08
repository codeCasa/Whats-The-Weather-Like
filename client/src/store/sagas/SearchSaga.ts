import { all, call, put, takeLatest } from "redux-saga/effects";
import { container } from "tsyringe";
import { CityInfo } from "../../models";
import {
  ApolloWeatherService,
  AxiosWeatherService,
  IWeatherService,
} from "../../service";
import { SearchActionCreator } from "../actions/SearchActionCreator";
import { SearchAction, SearchActionTypes } from "../types";
import { ISaga } from "./ISaga";

export class SearchSaga implements ISaga {
  private readonly weatherService: IWeatherService;
  private readonly searchActionCreator: SearchActionCreator;
  public constructor(searchActionCreator: SearchActionCreator) {
    this.searchActionCreator = searchActionCreator;
    this.weatherService = container.resolve(ApolloWeatherService);
    this.watcher = this.watcher.bind(this);
    this.search = this.search.bind(this);
  }

  public *search({ payload }: SearchAction) {
    yield put(this.searchActionCreator.setIsSearching(true));
    const weatherResults: CityInfo | null = yield call(
      this.weatherService.fetchWeatherForCityAsync,
      payload
    );
    yield put(this.searchActionCreator.setIsSearching(false));
    yield put(this.searchActionCreator.setSearchResults(weatherResults));
  }

  public *watcher() {
    yield all([takeLatest(SearchActionTypes.SEARCH, this.search)]);
  }

  public static getSaga = () => {
    return new SearchSaga(container.resolve(SearchActionCreator));
  };
}
