import React from 'react';
import { Car } from '../src/utilsHelpers/types';
import {CarPage} from '../src/utilsHelpers/carComponents/carPage';
import { Suspense } from "react";
import { fetchAllCars } from '../src/utilsHelpers/apiMethodsAndCalls/fetchAllCarsMethod';

export const metadata = {
  title: 'Volvo Cars Coding Test',
};

export default async function VolvoCarsCarouselPage() {
  const allCars: Car[] = await fetchAllCars();
  return <Suspense fallback={<p>Loading cars...</p>}><CarPage allCars={allCars} /></Suspense>;
}

export async function generateStaticParams () {
  const allCars = await fetchAllCars();
  return allCars.map((car: { id: { toString: () => string; }; }) => ({
    carId: car.id.toString(),
  }))
};