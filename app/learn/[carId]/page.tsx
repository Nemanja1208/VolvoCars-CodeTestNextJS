import React from 'react';
import { Suspense } from "react";
import { CarInformationComponent } from '../../../src/utilsHelpers/carComponents/carInformation';
import { getChoosenCarById } from '../../../src/utilsHelpers/helperFunctions';
import { Car, carIdProperties } from '../../../src/utilsHelpers/types';
import "../../../public/css/styles.css";

export const metadata = {
  title: 'Volvo Cars Shop',
};

export default async function VolvoCarsLearnPage({params : { carId }} : carIdProperties) {
  const choosenCar: Car = await getChoosenCarById(carId);
  return <Suspense fallback={<p>Loading learn page...</p>}><h5 className="linkStyle">LEARN</h5><CarInformationComponent car={choosenCar} /></Suspense>;
}
