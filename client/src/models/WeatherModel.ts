export interface WeatherAPIResponse {
    data: Data;
}

export interface Data {
    getCityByName: CityInfo;
}

export interface CityInfo {
    id: string;
    name: string;
    country: string;
    coord: Coord;
    weather: Weather;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Weather {
    summary: Summary;
    temperature: Temperature;
    wind: Wind;
    clouds: Clouds;
    timestamp: number;
}

export interface Clouds {
    all: number;
    visibility: number;
    humidity: number;
}

export interface Summary {
    title: string;
    description: string;
    icon: string;
}

export interface Temperature {
    actual: number;
    feelsLike: number;
    min: number;
    max: number;
}

export interface Wind {
    speed: number;
    deg: number;
}
