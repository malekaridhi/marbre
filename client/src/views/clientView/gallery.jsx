import React from 'react'
import "./home.scss"
import image1 from "./images/pic1.jpg"
import image2 from "./images/pic2.jpg"
import image3 from "./images/pic3.jpg"
import image4 from "./images/pic4.jpg"
import image5 from "./images/pic5.jpg"
import image6 from "./images/pic6.jpg"
import image7 from "./images/pic7.jpg"
import image8 from "./images/pic8.jpg"
import image9 from "./images/pic9.jpg"
import image10 from "./images/pic10.jpg"
import image11 from "./images/pic11.jpg"
import image12 from "./images/pic12.jpg"
const Gallery = () => {
    return (  <>
	<h3 className="h3">GALLERY</h3>
	<label className="line"></label>
		<p className="top-p"> We are always ready to guide you to the right choice</p>
		<br />
		
		<hr />
    <div className="gallery" id="gallery">
		
	<div className="gallery__column">
		<a href="https://unsplash.com/@jeka_fe" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src={image1} alt="Portrait by Jessica Felicio" className="gallery__image"/>
				<figcaption className="gallery__caption">Portrait by Jessica Felicio</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@oladimeg" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src={image2} alt="Portrait by Oladimeji Odunsi" className="gallery__image"/>
				<figcaption className="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@a2eorigins" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src={image3} alt="Portrait by Alex Perez" className="gallery__image"/>
				<figcaption className="gallery__caption">Portrait by Alex Perez</figcaption>
			</figure>
		</a>
	</div>
	
	<div className="gallery__column">
		<a href="https://unsplash.com/@noahbuscher" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src={image4} alt="Portrait by Noah Buscher" className="gallery__image"/>
				<figcaption className="gallery__caption">Portrait by Noah Buscher</figcaption>
			</figure>
		</a>
		
		<a href="https://unsplash.com/@von_co" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src={image5}alt="Portrait by Ivana Cajina" className="gallery__image"/>
				<figcaption className="gallery__caption">Portrait by Ivana Cajina</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@samburriss" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src={image6} alt="Portrait by Sam Burriss" className="gallery__image"/>
				<figcaption className="gallery__caption">Portrait by Sam Burriss</figcaption>
			</figure>
		</a>
	</div>
	
	<div className="gallery__column">
		<a href="https://unsplash.com/@marilezhava" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src={image7} alt="Portrait by Mari Lezhava" className="gallery__image"/>
				<figcaption className="gallery__caption">Portrait by Mari Lezhava</figcaption>
			</figure>
		</a>
		
		<a href="https://unsplash.com/@ethanhaddox" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src={image8} alt="Portrait by Ethan Haddox" className="gallery__image"/>
				<figcaption className="gallery__caption">Portrait by Ethan Haddox</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@mr_geshani" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src={image9} alt="Portrait by Amir Geshani" className="gallery__image"/>
				<figcaption className="gallery__caption">Portrait by Amir Geshani</figcaption>
			</figure>
		</a>
	</div>
	
	<div className="gallery__column">
		<a href="https://unsplash.com/@frxgui" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src={image10} alt="Portrait by Guilian Fremaux" className="gallery__image"/>
				<figcaption className="gallery__caption">Portrait by Guilian Fremaux</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@majestical_jasmin" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src={image11} alt="Portrait by Jasmin Chew" className="gallery__image"/>
				<figcaption className="gallery__caption">Portrait by Jasmin Chew</figcaption>
			</figure>
		</a>
		
		<a href="https://unsplash.com/@dimadallacqua" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src={image2} alt="Portrait by Dima DallAcqua" className="gallery__image"/>
				<figcaption className="gallery__caption">Portrait by Dima DallAcqua</figcaption>
			</figure>
		</a>
	</div>
</div>
    </>);
}
 
export default Gallery;