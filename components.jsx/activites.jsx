import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import First from "../styles/slider 01.png";
import Second from "../styles/slider2.png";
import Third from "../styles/slider3.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

export const Activites = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="">Activities</h2>
      
      <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect} interval={1000} >
        <Carousel.Item>
          <img src={First} className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
    
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
  <img src={Second} className="d-block w-100" style={{imageRendering:"crisp-edges"}} alt="Second slide" />
          <Carousel.Caption>
      
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={Third} className="d-block w-100" alt="Third slide" />
          <Carousel.Caption>
         
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
