import axios from "axios";
import { injectable } from "tsyringe";
import { CityInfo, WeatherAPIResponse } from "../models";
import { IWeatherService, WeatherServiceUri } from "./IWeatherService";

@injectable()
export class AxiosWeatherService implements IWeatherService {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public constructor() {}

    public fetchWeatherForCityAsync = async (cityName: string): Promise<CityInfo | null> => {
        try {
            const response = await axios.post<WeatherAPIResponse>(WeatherServiceUri, {
                query: `query {
                getCityByName(name: "${cityName}") {
                  id
                  name
                  country
                  coord {
                    lon
                    lat
                  }
                  weather {
                    summary {
                      title
                      description
                      icon
                    }
                    temperature {
                      actual
                      feelsLike
                      min
                      max
                    }
                    wind {
                      speed
                      deg
                    }
                    clouds {
                      all
                      visibility
                      humidity
                    }
                    timestamp
                  }
                }
              }`,
            });
            return response.data.data.getCityByName;
        } catch (ex) {
            return null;
        }
    };
}
