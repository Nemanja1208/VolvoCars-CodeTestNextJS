'use client';

import IndividualCar from "../../src/helpers/carInformation/individualCar";
import { AllCars, Car } from "../../src/helpers/types";

export const ListOfCars = ({allCars}: AllCars) => {
  return (
    <div>
      {allCars.map((car: Car) => (
        <div key={car.id}>
          <IndividualCar car={car} />
        </div>
        
      ))}
    </div>
  );
}