import React,{useState} from 'react'
import "./home.css"
import image1 from "./images/pic1.jpg"
import adress from "./images/adresse.png"
import mail from "./images/mail.png"
import phone from "./images/phone.png"
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import Header from './header'
import Gallery from "./gallery"
import{App ,db} from "../../firebase"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from "reactstrap";
import Slider from "./slider.jsx"
const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")
  const [loader, setLoader] = useState(false);
  const handleSubmit = (e) => {
	  // it gonna refresh the page if you don't use e.preventDefault();
    e.preventDefault();
    setLoader(true);
  // the collection iside firebase database 
  //name it contact_us
    db.collection("contact_us")
	//data unique for every user 
      .add({
        name: name,
        email: email,
        message: message,
      })
	  //alert message success
      .then(() => {
        setLoader(false);
        alert("votre message a été envoyé ...your message has been sent");
      })
	  //alert message for errors
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  }
    return ( <>
     <Header/>
   
   
     
   
<br />
<br />
<br />
<div className="content">
      <div className="about-agileits" id="about">
	<div className="container1">
		<h3 className="h3">About us</h3>
    
		<label className="line"></label>
		<p className="top-p"> We are always ready to guide you to the right choice
    </p>
	</div>
  <div id="about">
    <Row>
      <Col>
		<div className="slide"><Slider/></div>
    </Col>
    <Col>
		<div className=" about-right">
			<h4>Contrary to popular belief</h4>
			<p> We are always ready to guide you to the right choice. 
      With our Exotic range of limited edition stones, we invite you on a journey with our stonologist into the future. A future characterised by luxury and extravagance, a place that covers 5,00,000 sqft, where class converges with bliss to bring you the extraordinary 9th Avenue collection. An assortment of semi-precious stones procured from lands unknown to give you an experience unlike any other.
      <br />
      Easily find the product you are looking for by using the catalogs, articles and design tools we have prepared for you.
      <br />
      we serve the Architectural and Design Industry. As the country’s trusted manufacturer and distributor of terrazzo and natural stone, we have an extensive supply of quality products. Our mission is to provide our clients with the highest level of professionalism and technical knowledge. With over 75 years of experience, our clients can approach every project with confidence.

As a 100% employee owned company, our commitment to quality products and service will continue to be a focus as a growing, innovative and trustworthy company. 

      </p>
		
		</div>
    
		<div className="clearfix"></div>
    </Col>
    </Row>
    </div>
</div>
</div>
<section>
<Gallery />
</section>
<br />
<br />
<br />
<br />
<br />
<br />
<div className="content">
<h3 className="h3">CONTACT US</h3>
<label className="line"></label>
		<p className="top-p"> We are always ready to guide you to the right choice</p>
		<br />
		
		<hr />
<div className="w3l-contact-11"id="contact">
            <div className="contacts-main">
                <div className="contant11-top-bg">
                    <div className="wrapper1">
                        <div className="d-grid contact section-gap">
                            <div className="contact-info-left d-grid text-center">
                                <div className="contact-info">
                                    <span  aria-hidden="true"><img src={adress}/></span>
                                    <h4>Address</h4>
                                    <p>Habib Bourguiba Avenue - Residence Sousse Building</p>
                                </div>
                                <div className="contact-info">
                                    <span  aria-hidden="true"><img src={phone}/></span>
                                    <h4>Phone</h4>
                                    <p><a href="tel:+44 7834 857829">(+216) 73 224 500</a></p>
                                </div>
                                <div className="contact-info">
                                    <span  aria-hidden="true"><img src={mail}/></span>
                                    <h4>Mail</h4>
                                    <p><a href="mailto:mail@example.com" className="email">contact@tls-logistics-solutions.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-41-mian section-gap">
                    <div className="wrapper">
                        <h3 className="cont-head">Get in touch with us</h3>
                        <div className="d-grid align-form-map">
                            <div className="form-inner-cont">
                                <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="signin-form">
                                    <div className="form-input">
                                        <label >Name</label>
                                        <input type="text"  value={name}  id="w3lName" placeholder="name"onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="form-input">
                                        <label >Message(Required)*</label>
                                        <textarea  placeholder="Message" value={message}name="w3lMessage" id="w3lMessage" required="" onChange={(e) => setMessage(e.target.value)}></textarea>
                                    </div>
                                    <div className="form-input">
                                        <label >Email(Required)*</label>
                                        <input type="email" value={email} name="w3lSender" id="w3lSender" placeholder="Email" required="" onChange={(e) => setEmail(e.target.value)} />
                                    </div>

                                    <button  onClick={handleSubmit} type="submit" className="btn btn-contact">contact.submit</button>

                                </form>
                            </div>
                            <div className="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204479.3315512929!2d10.003193102567097!3d36.79480081359115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis!5e0!3m2!1sfr!2stn!4v1631292472688!5m2!1sfr!2stn" width="600"
                                    frameBorder="0" ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
</div>
</div>

<footer className="bg-dark">
    <div className="container py-5">
      <div className="row py-4">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" className="mb-3"/>
          <p className="font-italic text-muted">Easily find the product you are looking for by using the catalogs, articles and design tools we have prepared for you</p>
          <ul className="list-inline mt-4">
            <li className="list-inline-item"><a href="https://mobile.twitter.com/i/flow/signup" target="_blank" title="twitter"><TwitterIcon/></a></li>
            <li className="list-inline-item"><a href="https://www.facebook.com/" target="_blank" title="facebook"><FacebookIcon/></a></li>
            <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank" title="instagram"><InstagramIcon/></a></li>
            <li className="list-inline-item"><a href="https://www.linkedin.com/" target="_blank" title="pinterest"><LinkedInIcon/></a></li>
            
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#contact" className="text-muted">contact</a></li>
            <li className="mb-2"><a href="#Galerry" className="text-muted">Gallery</a></li>
            <li className="mb-2"><a href="#about" className="text-muted">about</a></li>
            <li className="mb-2"><a href="/home" className="text-muted">home</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-muted">Login</a></li>
            <li className="mb-2"><a href="#" className="text-muted"></a></li>
           
            <li className="mb-2"><a href="#" className="text-muted">Our Products</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-lg-0">
          
          <p className="text-muted mb-4">We are always ready to guide you to the right choice</p>
        
        </div>
      </div>
    </div>

    
    <div className="bg-light py-4">
      <div className="container text-center">
        <p className="text-muted mb-0 py-2">© 2021  All rights reserved.</p>
      </div>
    </div>
  </footer>

</>
 );
}
 
export default Home;