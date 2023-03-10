import React from 'react';
import { allCarIds, Car, parametersToReRender } from '../src/utilsHelpers/types';
import {CarPage} from '../src/utilsHelpers/carComponents/carPage';
import { fetchAllCars } from '../src/utilsHelpers/apiMethodsAndCalls/fetchAllCarsMethod';
import { returnAllAvailableParametersToReRender } from '../src/utilsHelpers/helperFunctions';

export const metadata = {
  title: 'Volvo Cars Coding Test',
};

export default async function VolvoCarsCarouselPage() {
  const allCars: Car[] = await fetchAllCars();
  return <CarPage carsToShow={allCars} />;
}

export async function generateStaticParams () {
  const allCars: Car[] = await fetchAllCars();
  const allAvailableParametersThatWeWantToPreRender: allCarIds[] = returnAllAvailableParametersToReRender(allCars);
  return allAvailableParametersThatWeWantToPreRender;
};