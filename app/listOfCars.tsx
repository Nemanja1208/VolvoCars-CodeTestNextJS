'use client';

import IndividualCar from "../src/utilsHelpers/carInformation/individualCar";
import { AllCars, Car } from "../src/utilsHelpers/types";
import { Flex, IconButton, View, SelectInput } from 'vcc-ui';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect } from "react";

export const ListOfCars = ({allCars}: AllCars) => {

  const sliderRef = React.useRef<Slider>(null);

  const sliderSettings = {
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

  const [value, setValue] = React.useState('');
  const [myCars, setMyCars] = React.useState(allCars);

  const allCarBodyTypes = allCars.map((car: Car) => car.bodyType);

  const uniqueCarBodyTypes = allCarBodyTypes.filter((element, index) => {
    return allCarBodyTypes.indexOf(element) === index;
  });

  useEffect(() => {
    if(value === '') return;
    console.log('in here');
    console.log(value);
    const filtered = allCars.filter(cars => cars.bodyType === value);
    setMyCars(filtered);
    console.log('Filtered', myCars);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  console.log(myCars);
  
  return (
    <View paddingLeft={5} paddingRight={5}>
        <SelectInput 
        label={'Filter by bodytype'}
        value={value}
        onChange={(e) => setValue(e.target.value)} 
      >
        {uniqueCarBodyTypes.map( carBodyType => (
            <option key={carBodyType} value={carBodyType}>{carBodyType.toUpperCase()}</option>
      ))}
      </SelectInput>
      <Slider {...sliderSettings} ref={sliderRef}>
      {myCars.map((car: Car) => (
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
  );
}