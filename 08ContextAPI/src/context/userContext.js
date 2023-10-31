import React from "react";

const userContext = React.createContext()

export default userContext;




/*
React.createContext() always give a provider which are used for the rap the component that are directly take the access of all state by using provider.
exp:- const userContext = React.createContext(); In this userContext is a provider
Provider syntax:-

                <nameOfProvider>
                <components/>
                <components/>
                <components/>
                </nameOfProvider>

*/
