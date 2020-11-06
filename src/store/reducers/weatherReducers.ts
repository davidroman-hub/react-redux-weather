import { WeatherState,WeatherAction, GET_WEATHER, SET_LOADING, SET_ERROR } from "../types";

const initialState: WeatherState = {
    data:null,
    loading:false,
    error:''
}

export default( state = initialState, action: WeatherAction ): WeatherState => {
    switch(action.type){
        case GET_WEATHER:
            return{
                data:action.payload,
                loading:false,
                error:''
            }
            case SET_LOADING:
                return{
                    ...state,
                    loading:true,
                }
            case SET_ERROR:
                return{
                    ...state,
                    error:action.payload,
                    loading:false
                }
            default: 
            return state // <=== if we dont put this it will not work at the final we need to return the state
    }
}