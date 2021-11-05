import React from 'react'
import { NavLink } from 'react-router-dom'

const linkObj = [
    {url:'/search', text: '🔍All'},
    {url:'/images', text: '🖼️Images'},
    {url:'/news', text: '📰News'},
    {url:'/videos', text: '📼Videos'}
]
const Links = () => {

    return (
        <div className="flex sm:justify-around justify-between items-center mt-4">
        {linkObj.map(({url, text}, index)=>(
            <NavLink to={url} activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2" className="m-2 mb-0" key={index}>
                {text}
            </NavLink>
        ))}
        </div>
    )
}

export default Links
