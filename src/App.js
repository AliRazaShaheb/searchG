import React,{useState} from 'react'
import {Footer} from './components/Footer'
import {Navbar} from './components/Navbar'
import {Routes} from './components/Routes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
    const [darkTheme, setDarkTheme] = useState(true)



    return (
        <Router>
        <div className={darkTheme ? 'dark': ''}>
            <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 text-body  min-h-screen ">
                <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme}  />
                <Routes />
                <Footer />
            </div>
        </div>
        </Router>
    )
}

export default App
