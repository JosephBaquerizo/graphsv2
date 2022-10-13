import { createContext, useReducer } from "react";

export const StoreContext = createContext();

export const ACTION_TYPES = {
    SET_SIDEBAR: "SET_SIDEBAR",
    SET_WEATHER_DATA: "SET_WEATHER_DATA",
    SET_INFO_CONTENT: "SET_INFO_CONTENT"
}

const storeReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_SIDEBAR: {
            return { ...state, sidebar: action.payload.sidebar }
        }
        case ACTION_TYPES.SET_WEATHER_DATA: {
            return { ...state, weatherData: action.payload.weatherData }
        }
        case ACTION_TYPES.SET_INFO_CONTENT: {
            return { ...state, infoContent: action.payload.infoContent }
        }
        default: 
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

const StoreProvider = ({children}) => {
    const initialState = {
        sidebar: false,
        weatherData: null,
        infoContent: "temperature",
    };
    const [state, dispatch] = useReducer(storeReducer, initialState);
    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
};

export default StoreProvider;