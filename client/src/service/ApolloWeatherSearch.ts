import {
  ApolloClient,
  gql,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { injectable } from "tsyringe";
import { CityInfo, Data } from "../models";
import { IWeatherService, WeatherServiceUri } from "./IWeatherService";

@injectable()
export class ApolloWeatherService implements IWeatherService {
  private client: ApolloClient<NormalizedCacheObject>;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public constructor() {
    this.client = new ApolloClient({
      uri: WeatherServiceUri,
      cache: new InMemoryCache(),
    });
  }

  public fetchWeatherForCityAsync = async (
    cityName: string
  ): Promise<CityInfo | null> => {
    try {
      const { data, error } = await this.client.query<Data>({
        query: gql`
          query {
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
          }
        `,
      });
      if (error) {
        return null;
      }
      return data.getCityByName;
    } catch (ex) {
      return null;
    }
  };
}
