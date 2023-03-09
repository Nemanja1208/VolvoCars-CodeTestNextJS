import React from 'react';
import { Suspense } from "react";
import { Car, carIdProperties } from '../../../src/utilsHelpers/types';
import { CarInformationComponent } from '../../../src/utilsHelpers/carComponents/carInformation';
import { getChoosenCarById } from '../../../src/utilsHelpers/helperFunctions';
import "../../../public/css/styles.css";

export const metadata = {
  title: 'Volvo Cars Shop',
};

export default async function VolvoCarsShopPage({params : { carId }} : carIdProperties) {
  const choosenCar: Car = await getChoosenCarById(carId);
  return <Suspense fallback={<p>Loading shop...</p>}><h5 className="linkStyle">SHOP</h5><CarInformationComponent car={choosenCar} /></Suspense>;
}