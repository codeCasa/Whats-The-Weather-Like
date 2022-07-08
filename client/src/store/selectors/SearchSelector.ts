import { forIn } from "lodash";
import { createSelector, ParametricSelector, Selector } from "reselect";
import { singleton } from "tsyringe";
import { CityInfo, Clouds, Temperature, Weather, Wind } from "../../models";
import { ApplicationReduxState } from "../reducers";
import { SearchReducerKeys, SearchStore } from "../types";

@singleton()
export class SearchSelector {
  public readonly selectIsSearching: Selector<
    ApplicationReduxState,
    boolean | undefined
  >;
  public readonly selectCityInfo: Selector<
    ApplicationReduxState,
    CityInfo | undefined | null
  >;
  public readonly selectClouds: Selector<
    ApplicationReduxState,
    Clouds | undefined
  >;
  public readonly selectTemperature: ParametricSelector<
    ApplicationReduxState,
    boolean,
    Temperature | undefined
  >;
  public readonly selectWind: Selector<ApplicationReduxState, Wind | undefined>;
  private readonly selectWeatherData: Selector<
    ApplicationReduxState,
    Weather | undefined
  >;

  public constructor() {
    this.selectIsSearching = createSelector(
      this.getSearchStore,
      (store) => store[SearchReducerKeys.IsSearching]
    );
    this.selectCityInfo = createSelector(
      this.getSearchStore,
      (store) => store[SearchReducerKeys.SearchResults]
    );
    this.selectWeatherData = createSelector(
      this.selectCityInfo,
      (cityInfo) => cityInfo?.weather
    );
    this.selectClouds = createSelector(
      this.selectWeatherData,
      (wd) => wd?.clouds
    );
    this.selectTemperature = createSelector(
      [this.selectWeatherData, (store, isInCelsius: boolean) => isInCelsius],
      (wd, isInCelsius) => {
        const temp = wd?.temperature;
        if (!temp) {
          return undefined;
        }
        const tempertures: Temperature = {
          actual: 0,
          feelsLike: 0,
          min: 0,
          max: 0,
        };
        forIn(temp, (value, key) => {
          if (isInCelsius) {
            tempertures[key as keyof Temperature] = value - 273.15;
          } else {
            tempertures[key as keyof Temperature] =
              (value - 273.15) * (9 / 5) + 32;
          }
        });
        return tempertures;
      }
    );
    this.selectWind = createSelector(this.selectWeatherData, (wd) => wd?.wind);
  }

  private getSearchStore = (state: ApplicationReduxState): SearchStore =>
    state[SearchReducerKeys.ReducerName];
}
