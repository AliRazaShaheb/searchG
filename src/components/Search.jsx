import {useState, useEffect} from 'react'
import { useDebounce } from 'use-debounce/lib'
import { useResultContext } from './contexts/ResultsContextProvider'
import Links from './Links'



export const Search = () => {
    const [text, setText] = useState()
    const {setSearchTerm} = useResultContext()
    const [debounceValue] = useDebounce(text, 1000)
    
    useEffect(()=>{
        if(debounceValue){
            setSearchTerm(debounceValue)
        }
    },[debounceValue])

    return (
        <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
            <input 
                type="text"
                value={text} 
                className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
                placeholder="search here..."
                onChange={(e)=>{setText(e.target.value)}}
            />
            {text && (
                <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500" onClick={()=>setText("")}>
                X
                </button>
            )}
            <Links /> 
        </div>
    )
}
