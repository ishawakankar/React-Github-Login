/* eslint react/prop-types: 0*/
/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Github from '../components/GithubLogin';
import Dashboard from '../components/afterLogin';

const AppRouter = () =>
(
    <BrowserRouter>
    <div>
        <Switch>
            <Route path="/" component={Github} exact={true}/>
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;