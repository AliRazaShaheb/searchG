import React,{useEffect} from 'react';
import { useLocation } from 'react-router';
import ReactPlayer from 'react-player';
import { useResultContext } from './contexts/ResultsContextProvider';
import { Loading } from './Loading';



export const Results = () => {
  const {getResult, result, isLoading, searchTerm, setSearchTerm} = useResultContext();
  const location = useLocation();
  
    

    useEffect(()=>{
        if(searchTerm){
            if(location.pathname === "/videos"){
                getResult(`/search/q=${searchTerm} videos=40&lr=lang_en`);
            } else{
                getResult(`${location.pathname}/q=${searchTerm}=40&lr=lang_en`);
            }
        }
    }, [searchTerm, location.pathname])
   

    if(isLoading) {
        return (
        <>
        <h1 style={{margin:"0 auto", width:"100%"}}>DATA IS LOADING</h1>
        <Loading />
        </>
        )
    }
    switch (location.pathname) {
        case "/search":
            return <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                {result?.map(({link, title, description}, index)=>(
                    <div key={index}className="md:w-2/5 w-full">
                        <a href={link} target="_blank" rel="noreferrer">
                            <p className="text-sm">
                                {link.length>30?link.substring(0,30):link}
                            </p>
                            <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                {title}
                            </p>
                            <p className="text-xs">
                                {description}
                            </p>
                        </a>
                    </div>
                ))}
            </div>
        case "/images":
            return (
                <div className="flex flex-wrap justify-center items-center">
                {result?.map(({image,link:{href, title}}, index)=>(
                    <a className="sm:p-3 p-5" href={href} target="_blank" rel="noreferrer" key={index}>
                        <img src={image?.src} alt={title} loading="lazy" />
                        <p className="w-36 break-words text-sm mt-2">
                            {title}
                        </p>
                    </a>
                ))}

                </div>
            );
        case "/news":
            return <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
                
                {result?.map(({link, id, source, title})=>(
                    <div key={id} className="md:w-2/5 w-full">
                        <a href={link} target="_blank" rel="noreferrer" >
                            <p className="text-lg dark:text-gray-100 text-gray-700">
                                {title}
                            </p>
                        </a>
                        <div className="flex gap-4 hover:underline dark:text-blue-300 text-blue-700 ">
                            <a href={source?.href} target="_blank" rel="noreferrer">
                                {source?.href}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        case "/videos":
            return <div className="flex flex-wrap justify-center items-center">
                {result?.map((video, index)=>(
                    <div key={index} className="p-2">
                        {video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links?.[0]?.href} 
                            controls width="355px" height="200px"/>}
                    </div>
                ))}

                </div>;
        default:
            return 'ERROR!';
    }

    
}



