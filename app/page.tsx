import React from 'react';
import { Car } from '../src/utilsHelpers/types';
import {ListOfCars} from './listOfCars';
import { Suspense } from "react";
import { getAllCars } from '../src/utilsHelpers/apiMethodsAndCalls/fetchAllCarsMethod';

export const metadata = {
  title: 'Volvo Cars Coding Test',
};

export default async function VolvoCarsCarouselPage() {
  const allCars: Car[] = await getAllCars();
  return <Suspense fallback={<p>Loading cars...</p>}><ListOfCars allCars={allCars} /></Suspense>;
}

export async function generateStaticParams () {
  const allCars = await getAllCars();
  return allCars.map((car: { id: { toString: () => string; }; }) => ({
    carId: car.id.toString(),
  }))
};