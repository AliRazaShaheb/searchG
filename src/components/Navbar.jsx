import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'

export const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <div className="p-2 px-4 flex flex-wrap sm:justify-between justify-center border-b dark:border-gray-700 border-gray-200 " >
            <div className="flex justify-between items-center space-x-5 w-screen py-1" >
                <Link to= "/">
                    <p className="text-2xl bg-blue-500 py-1 px-2 font-bold text-white rounded dark:bg-gray-500 dark:text-gray-900 ">
                        searchG🌐
                    </p>
                </Link>
                <button type="button" onClick={()=>setDarkTheme(!darkTheme)}className="text-xl dark:bg-gray-50 dark: text-gray-900 bg-gray-500 text-white border rounded-full py-1 px-2 hover:shadow-lg" >
                    {darkTheme ? "Light ☀ " : "Dark 🌛"}
                </button>
            </div>
            <Search />
        </div>
    )
}
