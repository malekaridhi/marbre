/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React ,{Suspense}from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/demo.css";
import { createStore, applyMiddleware, compose } from "redux";
import AdminLayout from "layouts/Admin.js";
import UserLayout from "layouts/user.js";
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootreducer'
import PrivateRoute from './views/auth/privetroutes'
 import ApdateProfile from "../src/views/auth/UpdateProfile"
import Home from "../src/views/clientView/home"
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
   
  )
);
ReactDOM.render(
  <Provider store={store}>
  <Suspense>
  <BrowserRouter>
  
    <Switch>
    <Route path="/now-ui-dashboard-react" component={Home}/>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/" render={(props) => <UserLayout {...props} />} />
      <Route path="/update-profile" component={ApdateProfile}/>
      <Redirect to="/admin/dashboard" />
    </Switch>
    
  </BrowserRouter>
  </Suspense>
  </Provider>,
  document.getElementById("root")
);
