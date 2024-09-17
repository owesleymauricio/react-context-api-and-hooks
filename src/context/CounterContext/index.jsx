"use client";

import { buidAction } from "./buidAction";
import { reducer } from "./reducer";

const { createContext, useContext, useReducer, useRef } = require("react");

const Context = createContext();

export const initialState = {
    counter: 0,
    loading: false,
} 

export const CounterContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const actions = useRef(buidAction(dispatch));
    return(
        <Context.Provider value={[ state, actions.current ]}>
            {children}
        </Context.Provider>
    )
}

export const useCounterContext = () => {
    const context = useContext(Context);


    if(typeof context === "undefined"){
        throw new Error("you have to use useCounterContext inside <CounterContextProvider />")
    }

    return[...context];
}