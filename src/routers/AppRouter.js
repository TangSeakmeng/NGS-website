import React, { Component } from 'react';
import {BrowserRouter, Route, Router, Switch, Redirect} from 'react-router-dom';

import Header from '../components/header';
import Dashboard from '../components/dashboard';
import NotFoundPage from '../components/404NotFound';
import Footer from '../components/footer';

const AppRouter = () => (
    <BrowserRouter>  
        <div>
            <Header />
            <Switch>  
                <Route path="/" component={Dashboard} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>  
            <Footer/>
        </div>
    </BrowserRouter>  
);

export default AppRouter;