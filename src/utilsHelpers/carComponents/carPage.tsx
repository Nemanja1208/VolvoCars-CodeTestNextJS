'use client';

import { AllCars, Car } from "../types";
import { View, SelectInput, Flex, Logo } from 'vcc-ui';
import React, { useEffect } from "react";

import CarouselSlider from "../carouselComponents/carouselSlider";
import { returnUniqueCarBodytypes } from "../helperFunctions";

export const CarPage = ({allCars}: AllCars) => {

  const uniqueCarBodyTypes: string[] = returnUniqueCarBodytypes(allCars);
  const [choosenBodytype, setChoosenBodytype] = React.useState('');
  const [filteredCarsAccordingToBodytype, setFilteredCarsAccordingToBodytype] = React.useState(allCars);

  useEffect(() => {
    if(choosenBodytype === '') return;
    const filteredCars = allCars.filter(cars => cars.bodyType === choosenBodytype);
    setFilteredCarsAccordingToBodytype(filteredCars);
  }, [allCars, choosenBodytype]);

  return (
    
    <View paddingLeft={5} paddingRight={5}>
      <Logo type="spreadmark" height={16} />
      <Flex extend={{width: '10vw', padding: '15px'}}>
      <SelectInput 
        label={'Filter by bodytype'}
        value={choosenBodytype}
        onChange={(e) => setChoosenBodytype(e.target.value)} 
      >
        {uniqueCarBodyTypes.map( carBodyType => (
            <option key={carBodyType} value={carBodyType}>{carBodyType.toUpperCase()}</option>
      ))}
      </SelectInput>
      </Flex>
      <CarouselSlider allCars={filteredCarsAccordingToBodytype}/>
    </View>

  );
}