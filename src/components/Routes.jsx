import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Search } from './Search'
import { Results } from './Results'


export const Routes = () => {
    return (
        <div className= "p-4">
        <Switch>
            <Route exact path="/">
                <Redirect to="/search" component ={Search} />
            </Route>
            <Route exact path={['/search', '/images', '/news', '/videos']}>
                <Results />
            </Route>
        </Switch>
        </div>
    )
}
