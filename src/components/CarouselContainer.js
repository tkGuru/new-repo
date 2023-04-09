import React,{useEffect,useState} from "react";
import "./CarouselContainer.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import slideOne from "../assets/banner/bannerImgOne.jpg";
//import slideTwo from "../assets/banner/bannerImgTwo.jpg";
//import slideThree from "../assets/banner/bannerImgThree.jpg";
//import slideFour from "../assets/banner/bannerImgFour.jpg";
//import slideFive from "../assets/banner/bannerImgFive.jpg";
import { getAllImages } from '../services/ImageServices';
//import { Box } from '@chakra-ui/react';

//const carouselImages = [slideOne, slideTwo, slideThree, slideFour, slideFive];


function CarouselContainer() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getAllImages()
      .then((result) => {
        setImages(result.data);
      });
  }, []);

  return (
  <div className="slider-container">
    
    <Carousel
      className="home__carousel"
      showArrows={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      showThumbs={false}
      interval={5000}
      transitionTime={200}
    >
      
        {images && images.map((image, index) => (
          <div className="home_image" key={index}>
            <img src={image.image} alt='carousel' width='300px' height='400px'/>
          </div>
        ))}
      
    </Carousel>
              
</div>
  );
}

export default CarouselContainer;
