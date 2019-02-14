import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from '../App'
import Profile from './Profile'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/detail/:key" component={Profile}></Route>
                <Route children={()=>(
                     <p>Not Fount</p>
                )}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
