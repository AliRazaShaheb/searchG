import React,{useEffect} from 'react';
import { useLocation } from 'react-router';
import ReactPlayer from 'react-player';

import { useResultContext } from './contexts/ResultsContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const {getResult, result, isLoading, searchTerm, setSearchTerm} = useResultContext();
  const location = useLocation();
  
useEffect(()=>{
    getResult('/javascript');
}, [])
    
console.log(result)
    if(isLoading){
        return <Loading type="Puff" color="#00BFFF" height={550} width={80} />
    }
    switch (location.pathname) {
        case "/search":
            return 'SEARCH';
        case "/images":
            return 'IMAGES';
        case "/news":
            return 'NEWS';
        case "/videos":
            return 'VIDEOS';
        default:
            return 'ERROR!';
    }
}
