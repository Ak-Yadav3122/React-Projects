import React, { useState } from "react";
import userContext from "./userContext";

const userContextProvider = function({children}){ // serContextProvider is method and {children}is props that are come
    const [user , setUser] = React.useState([])
  return(
    <userContext.Provider value={{user,useState}}>
        {children}  
    </userContext.Provider>
  )
}
export default userContextProvider