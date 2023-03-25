export interface currentWeather {
    temperature: number;
    time: string;
    weathercode: number;
    windspeed: number;
}

export interface weatherInfo {
    latitude: number;
    longitude: number;
    timezone: string;
    current_weather: currentWeather;
    elevation: number;
    daily: daily_units;
    daily_units: any;

}

export interface daily_units {
    sunrise: string[];
    sunset: string[];
    temperature_2m_max: string[];
    time: string[];
    uv_index_max: string[];
}

export interface requestData {
    current_weather: currentWeather;
    isLoading: boolean;
    error: any;
}

