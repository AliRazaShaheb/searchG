import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {ResultsContextProvider} from './components/contexts/ResultsContextProvider'
import App from './App';



ReactDOM.render(
<ResultsContextProvider>
    <App />
</ResultsContextProvider>
, document.getElementById('root'))
