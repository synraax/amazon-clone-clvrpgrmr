// setup data layer to track the basket

import React, { createContext, useContext, useReducer } from "react";

// data layer
export const StateContext = createContext();

//build provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider> 
    );

// how to use it inside of a component
export const useStateValue = () => useContext(StateContext);