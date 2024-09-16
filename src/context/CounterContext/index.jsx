"use client";
const { createContext, useContext } = require("react");

const Context = createContext();

export const initialState = {
    counter: 0,
    loading: false
} 

export const CounterContextProvider = ({children}) => {
    return(
        <Context.Provider value={initialState}>
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