import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import image1 from '../images/bodclapslide_orig.jpg';
import image2 from '../images/tugowar_orig.jpg'
import image3 from '../images/kids-play-slide_orig.jpg'
import image4 from '../images/asparasslide_orig.jpg'
 
// class Slideshow extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       slideIndex: 1
//     };
//   }

//   plusSlides = (n) => {
//     this.showSlides(this.state.slideIndex += n);
//   }

//   currentSlide = (n) => {
//     this.showSlides(this.state.slideIndex = n);
//   }

//   showSlides = (n) => {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");

//     console.log(slides)
    
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {this.state.slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[this.state.slideIndex-1].setAttribute("style", "display: block;") 
//     dots[this.state.slideIndex-1].className += " active";
//   }

//   render() {
//     return (
//       <div>
        
//         <div className="slideshow-container">
  
//           <div className="mySlides fade">
//             <div className="numbertext">1 / 4</div>
//             <img src={'/dist/' + image1 } style={{ width: "100%"}} />
//             <div className="text">Caption Text</div>
//           </div>
  
//           <div className="mySlides fade">
//             <div className="numbertext">2 / 4</div>
//             <img src={'/dist/' + image2 } style={{ width: "100%"}} />
//             <div className="text">Caption Two</div>
//           </div>
  
//           <div className="mySlides fade">
//             <div className="numbertext">3 / 4</div>
//             <img src={'/dist/' + image3 } style={{ width: "100%"}} />
//             <div className="text">Caption Three</div>
//           </div>
  
//           <div className="mySlides fade">
//             <div className="numbertext">4 / 4</div>
//             <img src={'/dist/' + image4 } style={{ width: "100%"}} />
//             <div className="text">Caption Three</div>
//           </div>
  
//           <a className="prev" onClick={this.plusSlides(-1)}>&#10094;</a>
//           <a className="next" onClick={this.plusSlides(1)}>&#10095;</a>
  
//         </div>
  
//         <br/>
  
//         <div style={{ textAlign: "center" }}>
//           <span className="dot" onClick={this.currentSlide(1)}></span> 
//           <span className="dot" onClick={this.currentSlide(2)}></span> 
//           <span className="dot" onClick={this.currentSlide(3)}></span> 
//           <span className="dot" onClick={this.currentSlide(4)}></span> 
//         </div>
  
//         { this.showSlides(this.state.slideIndex) }
  
//       </div>
//     )  
//   }
// }

const fadeImages = [
  image1, image2, image3, image4
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={ '/dist/' + fadeImages[0]} />
          </div>
          <div className="image-detail">
            <h1>First Slide</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={ '/dist/' + fadeImages[1]} />
          </div>
          <div className="image-detail">
            <h1>Second Slide</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={ '/dist/' + fadeImages[2]} />
          </div>
          <div className="image-detail">
            <h1>Third Slide</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow;