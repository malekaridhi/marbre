import React ,{useState} from 'react'
import "./home.css"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  import AccountCircleIcon from '@material-ui/icons/AccountCircle';
  import image from "./images/img1.jpg"
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (<>
      <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/Home">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#gallery">Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
          </Nav>
          <NavLink href="/login"><AccountCircleIcon href="/login"></AccountCircleIcon></NavLink>
        </Collapse>
      </Navbar>
      <header>
    <div className="owl-carousel owl-theme">
        <div className="item">
            <img src={image} alt=""/>
            <div className="cover">
                <div className="container">
                    <div className="header-content">
                        <div className="line"></div>
                        <h2>Extraction, transformation and shaping</h2>
                        <h1>Our Global and Excellent marble</h1>
                        <h4>We offer Variety, availability, innovation and quality; </h4>
                    </div>
                </div>
             </div>
        </div>                    
        </div>
</header>
    </div>

    </>  );
}
 
export default Header;<>
</>