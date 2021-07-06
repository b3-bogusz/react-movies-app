import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchView from "../../views/SearchView/SearchView";
import MovieDetailsView from "../../views/MovieDetailsView/MovieDetailsView";

const BaseRoutes = () => (
    <Switch>
        <Route exact path="/" component={SearchView}/>
        <Route exact path="/movie" component={MovieDetailsView}/>
    </Switch>
);

export default BaseRoutes;