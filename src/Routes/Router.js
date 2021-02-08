//Para administrar todas as rotas

import React from 'react';
import HomePage from '../Pages/HomePage/HomePage'
import ApplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage'
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage'
import ListTripsPage from '../Pages/ListTripsPage/ListTripsPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailsPage'
import { BrowserRouter, Switch, Route } from "react-router-dom";


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route exact path='/login'>
          <LoginPage />
        </Route>

        <Route exact path='/list-trips'>
          <ListTripsPage />
        </Route>

        <Route exact path='/trip-details'>
          <TripDetailsPage />
        </Route>
        
        <Route exact path='/create-trip'>
          <CreateTripPage />
        </Route>

        <Route exact path='/application-form'>
          <ApplicationFormPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;