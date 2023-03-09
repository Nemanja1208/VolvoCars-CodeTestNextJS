'use client';

import { AllCars } from "../types";
import { View, SelectInput, Flex, Logo } from 'vcc-ui';
import React, { useEffect } from "react";

import CarouselSlider from "../carouselComponents/carouselSlider";
import { filterCarsAccordingToBodytype, returnUniqueCarBodytypes } from "../helperFunctions";

export const CarPage = ({carsToShow: allCars}: AllCars) => {

  const uniqueCarBodyTypes: string[] = returnUniqueCarBodytypes(allCars);
  const [choosenBodytype, setChoosenBodytype] = React.useState('');
  const [filteredCarsAccordingToBodytype, setFilteredCarsAccordingToBodytype] = React.useState(allCars);

  useEffect(() => {
    if(choosenBodytype === '') return;
    if(choosenBodytype === 'all') {
      setFilteredCarsAccordingToBodytype(allCars);
    } else {
      const filteredCars = filterCarsAccordingToBodytype(allCars, choosenBodytype);
      setFilteredCarsAccordingToBodytype(filteredCars);
    }
  }, [allCars, choosenBodytype]);

  return (
    
    <View paddingLeft={5} paddingRight={5}>
      <Logo type="spreadmark" height={16} />
      <Flex className="selectDropdownStyle">
      <SelectInput 
        label={'Filter by bodytype'}
        value={choosenBodytype}
        onChange={(e) => setChoosenBodytype(e.target.value)} 
      >
        <option value='all'>ALL</option>
        {uniqueCarBodyTypes.map( carBodyType => (
          <option key={carBodyType} value={carBodyType}>{carBodyType.toUpperCase()}</option>
        ))}
      </SelectInput>
      </Flex>
      <CarouselSlider carsToShow={filteredCarsAccordingToBodytype}/>
    </View>

  );
}