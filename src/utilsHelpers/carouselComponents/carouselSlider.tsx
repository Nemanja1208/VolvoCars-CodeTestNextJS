import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselNavigation from "./carouselNavigation";
import IndividualCar from "../carComponents/carCardComponent";
import { AllCars, Car } from "../types";

export default function CarouselSlider({allCars} : AllCars) {

    const sliderRef = React.useRef<Slider>(null);

    const sliderSettings = {
    dots: false,
    infinite: false,
    autoplay: false,
    initialSlide: 0,
    autoplaySpeed: 3000,
    slidesToScroll: allCars.length < 4 ? allCars.length : 2,
    slidesToShow: allCars.length < 4 ? allCars.length : 4,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            initialSlide: 1,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
        },
        },
        {
        breakpoint: 768,
        settings: {
            initialSlide: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        },
        },
    ],
    };
    return (
        <div>
        <Slider {...sliderSettings} ref={sliderRef}>
        {allCars.map((car: Car) => (
          <div key={car.id} style={{ padding: '5px'}}>
              <IndividualCar car={car} />
          </div>
        ))}
        </Slider>
        <CarouselNavigation sliderRef={sliderRef}/>
        </div>
    )
  }