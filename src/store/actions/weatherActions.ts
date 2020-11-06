
import {ThunkAction} from 'redux-thunk'
import { RootState } from '../../storeIndex'
import {
        
        WeatherAction,
        WeatherData, 
        WeatherError,
        
        GET_WEATHER,
        SET_LOADING,
        SET_ERROR,
        WeatherState
    
    } from '../types'

                            //IT will be an async Action Thunk === async
                                        // ==>
export const getWeather = ( city :string): ThunkAction<void, RootState,null, WeatherAction> => {
    //async =>
            //dipatch = call the action
        return async dispatch => {
            try{                                 // api.openweathermap.org/data/2.5/weather?id=2172797&appid={API key} <== This is the API
                const response = await fetch(`api.openweathermap.org/data/2.5/weather?id=${city}&appid=${process.env.REACT_APP_API_KEY}`);
                // if we dont have response => 
                if(!response.ok){
                    const responseData: WeatherError = await response.json();
                    throw new Error(responseData.message);
                }
                const responseData : WeatherData = await response.json()
                dispatch({
                    type:GET_WEATHER,
                    payload:responseData
                });
            } catch(err){
                dispatch({
                    type:SET_ERROR,
                    payload:err.message
                })
            }
        }
    }
                            //===> Remember this cames from the actions 
                // and we gonna use WeahterActionsa for this Loading  
        // Because we gonna user setLoading in WeatherActions
    export const setLoading = () : WeatherAction  => {
        return{
            type:SET_LOADING,
        }
    }

                    //===> Remember this cames from the actions 
                // and we gonna use WeahterActionsa for this Loading  
            // Because we gonna user setError in WeatherActions

    export const setError = () : WeatherAction => {
        return{
            type:SET_ERROR,
            payload:''
        }
    }