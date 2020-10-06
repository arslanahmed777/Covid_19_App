import React from "react";
import Globle from "./Globle";
import AllCountries from "./AllCountries";
import Graphs from "./Graphs.js";


const InfoPanel = ({currentScreen}) => {
    if(currentScreen === 0)
    {
       return <Globle/>
    }
    else if(currentScreen === 1)
    {
        return <AllCountries/>
    }
    else if(currentScreen === 2)
    {
        return <Graphs/>
    }

  
};

export default InfoPanel;
