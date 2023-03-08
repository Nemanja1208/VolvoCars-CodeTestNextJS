'use client';

import IndividualCar from "../src/helpers/carInformation/individualCar";
import { AllCars, Car } from "../src/helpers/types";
import { Flex, View, IconButton } from 'vcc-ui';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

export const ListOfCars = ({allCars}: AllCars) => {
  let settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    initialSlide: 0,
    autoplaySpeed: 3000,
    slidesToScroll: allCars.length < 4 ? allCars.length : 4,
    slidesToShow: allCars.length < 4 ? allCars.length : 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          initialSlide: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  const sliderRef = React.useRef<Slider>(null);
  return (
    // <Flex extend={{ flexDirection: 'row', flexWrap: 'wrap'}}>
      <View paddingLeft={5} paddingRight={5}>
      <Slider {...settings} ref={sliderRef}>
      {allCars.map((car: Car) => (
        <div key={car.id} style={{ padding: '5px'}}>
            <IndividualCar car={car} />
        </div>
      ))}
      </Slider>
      <Flex
        extend={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "end",
          padding: "25px",
        }}
      >
        <div style={{ padding: "10px" }}>
          <IconButton
            variant="outline"
            aria-label="Next slide"
            iconName="navigation-chevronback"
            onClick={() => sliderRef.current?.slickPrev()}
          />
        </div>
        <div style={{ padding: "10px" }}>
          <IconButton
            variant="outline"
            aria-label="Previous slide"
            iconName="navigation-chevronforward"
            onClick={() => sliderRef.current?.slickNext()}
          />
        </div>
        </Flex>
      </View>
      // {allCars.map((car: Car) => (
      //   <div key={car.id} style={{ padding: '5px'}}>
      //       <IndividualCar car={car} />
      //   </div>
      // ))}
    // </Flex>
  );
}