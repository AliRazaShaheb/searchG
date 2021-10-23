import { PreviousMap } from "postcss";
import React,{createContext, useContext, useState} from "react";
import axios from "axios";

const ResultContext = createContext();

export const ResultsContextProvider = ({children})=>{
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm]= useState('');

    const getResult = async(type)=>{
        setIsLoading(true)
        
        var axios = require("axios").default;
        var options = {
        method: 'GET',
        url: 'https://google-search1.p.rapidapi.com/google-search',
        params: {hl: 'en', q:`${type}`, gl: 'us'},
        headers: {
            'x-rapidapi-host': 'google-search1.p.rapidapi.com',
            'x-rapidapi-key': 'd6f22a5797msh48e0b7b2aff05cfp1b3ee9jsn56263f38024d'
        }
        };

        axios.request(options).then(function (response) {
            setResult(response.data);
        }).catch(function (error) {
            console.error(error);
        });

        
        
        
        
        setIsLoading(false);
    }
    return(
        <ResultContext.Provider value={{getResult, result, isLoading, searchTerm, setSearchTerm}}>
            {children}
        </ResultContext.Provider>
    )
}


export const useResultContext = ()=> useContext(ResultContext);
