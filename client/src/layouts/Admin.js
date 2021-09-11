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
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import AddClient from "../views/adds/addClient"
import routes from "routes.js";
import AddProduct from "../views/adds/addProduct"
import AddCharge from "../views/adds/addCharge"
import AddEmpCharge from "../views/adds/addEmpCharge"
import AddFacture from "../views/adds/addFacture"
import ProdDetail from "../views/detail/prodDetail"
import FactureDetail from "../views/detail/facturedetail"
import Home from "../views/clientView/home"
// import PrivateRoute from "../views/auth/privetroutes"
var ps;

function Admin(props) {
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = React.useState("blue");
  const mainPanel = React.useRef();
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
  }, [location]);
  const handleColorClick = (color) => {
    setBackgroundColor(color);
  };
  return (
    
    <div className="wrapper">
      <Sidebar {...props} routes={routes} backgroundColor={backgroundColor} />
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar {...props} />
        <Switch>
        
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
          <Route path="/admin/addclient" component={AddClient}/>
          <Route path="/admin/addproduct" component={AddProduct}/>
          <Route path="/admin/addcharge" component={AddCharge}/>
          <Route path="/admin/addempchar" component={AddEmpCharge}/>
          <Route path="/admin/addfacture" component={AddFacture}/>
          <Route path="/admin/:id/product" component={ProdDetail}/>
          <Route path="/admin/:id/facture" component={FactureDetail}/>
          
          <Redirect from="/admin" to="/admin/dashboard" />
          
        </Switch>
        <Footer fluid />
      </div>
      <FixedPlugin
        bgColor={backgroundColor}
        handleColorClick={handleColorClick}
      />
    </div>
   
  );
}

export default Admin;
