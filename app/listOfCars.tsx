'use client';

import IndividualCar from "../src/helpers/carInformation/individualCar";
import { AllCars, Car } from "../src/helpers/types";
import { Flex } from 'vcc-ui';

export const ListOfCars = ({allCars}: AllCars) => {
  return (
    <Flex extend={{ flexDirection: 'row', flexWrap: 'wrap'}}>
      {allCars.map((car: Car) => (
        <div key={car.id} style={{ padding: '5px'}}>
            <IndividualCar car={car} />
        </div>
      ))}
    </Flex>
  );
}