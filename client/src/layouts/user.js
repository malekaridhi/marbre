import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
// reactstrap components
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import SignUp from "../views/auth/signup"
import logIn from "../views/auth/login"
import ForgetPasword from "../views/auth/forgetPasword"
import ApdateProfile from "../views/auth/UpdateProfile"
import Home from "../views/clientView/home"
import Footer from "components/Footer/Footer.js";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
var ps;
function User(props) {
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
      
      <div className="wrapper" ref={mainPanel}>
        <DemoNavbar {...props} />
       <Switch>
            
            <Route path="/Signup" component={SignUp}/>
            <Route path="/login" component={logIn}/>
            <Route path="/forgot-password" component={ForgetPasword}/>
            
          </Switch>
          <Footer fluid />
          <FixedPlugin
     bgColor={backgroundColor}
     handleColorClick={handleColorClick}
   />
      </div>
    
    );
  }
  
  export default User;