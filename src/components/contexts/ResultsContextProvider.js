
import React,{createContext, useContext, useState} from "react";


const ResultContext = createContext();
const baseUrl= `https://google-search3.p.rapidapi.com/api/v1`;

export const ResultsContextProvider = ({children})=>{
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm]= useState('');

    const getResult = async(type)=>{
        setIsLoading(true)
        try{
            const response = await fetch(`${baseUrl}${type}`, {
                method:'GET',
                headers:{
                    "x-user-agent": "desktop",
                    "x-rapidapi-host": "google-search3.p.rapidapi.com",
                    "x-rapidapi-key": "d6f22a5797msh48e0b7b2aff05cfp1b3ee9jsn56263f38024d"
            }});

            const data = await response.json();
            if(type.includes("/news")){
                setResult(data.entries)
            } else if(type.includes("/images")){
                setResult(data.image_results); 
            }else{
                setResult(data.results); 
            }
        }catch{
            return null;
        }
          setIsLoading(false);
        
    }
    return(
        <ResultContext.Provider value={{getResult, result, isLoading, searchTerm, setSearchTerm}}>
            {children}
        </ResultContext.Provider>
    )
}


export const useResultContext = ()=> useContext(ResultContext);
