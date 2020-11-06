
export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

export interface Weather { // Is declared here!
    description:string;
    icon:string;
    id:number;
    main:string;
}

export interface WeatherData {
    base:string;
    clouds:{
        all:number
    };
    cod:number;
    coord:{
        lon:number;
        lat:number
    };
    dt:number;
    id:number;
    main:{
        feels_like:number;
        humidity:number;
        pressure:number;
        temp_min:number;
        temp_max:number;
    };
    name:string;
    sys:{
        type: number;
        id: number;
        message: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone:number;
    visibility:number;
    weather:Weather[]; //<== Is declared at the top!!  and is an array all the documentations here: https://openweathermap.org/current
    wind:{
        speed:number;
        deg:number;
    }
}

export interface WeatherError {
    cod:string;
    message:string;
}

export interface WeatherState{
    data:WeatherData | null //<== All the parameter data is Weather data or if not null or undefined
    loading:boolean; // NOTE: Remember the boolean only can have true or false!!
    error:string;
}


interface GetWeatherAction {
    type: typeof GET_WEATHER ; //<--- This is the actions declared at the beggining
    payload:WeatherData ;//< --- And the result or payload will be all the weather data!! have sence
}

interface SetLoadingAction {
    type: typeof SET_LOADING //<--- This is the actions declared at the beggining
}

interface SetErrorAction {
    type: typeof SET_ERROR; //<--- This is the actions declared at the beggining
    payload:string; //<---And the result or payload we gonna receive the message to know what it could be the error 
}

/// This Says 'Weather Action could be GetWeatherAction, SetLoadingAction or SetErrorAction' 
// But to refeer to all this options we gonna use only WeatherAction :D
export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;

export interface AlertAction {
    type: typeof SET_ALERT;
    payload:string
}

export interface AlertState {
    message:string;
}