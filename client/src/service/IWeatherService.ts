import { CityInfo } from "../models";

export interface IWeatherService {
    fetchWeatherForCityAsync: (cityName: string) => Promise<CityInfo | null>;
}

export const WeatherServiceUri = "https://graphql-weather-api.herokuapp.com/";
