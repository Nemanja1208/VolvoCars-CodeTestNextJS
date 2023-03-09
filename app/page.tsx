import React from 'react';
import { Car } from '../src/utilsHelpers/types';
import {ListOfCars} from './listOfCars';
import { Suspense } from "react";

const getAllCarsAPIUrl = 'http://localhost:3000/api/cars.json';

async function getAllCars() {
  // const responseFromGetAllCarsApi = await fetch(getAllCarsAPIUrl, {next: { revalidate: 120 }});
  const responseFromGetAllCarsApi = await fetch(getAllCarsAPIUrl);
  const allCars = await responseFromGetAllCarsApi.json();
  return allCars;
}

export default async function Homepage() {

  const allCars: Car[] = await getAllCars();

  return <Suspense fallback={<p>Loading cars...</p>}><ListOfCars allCars={allCars} /></Suspense>;
}

export async function generateStaticParams () {
  const allCars = await getAllCars();

  return allCars.map((car: { id: { toString: () => string; }; }) => ({
    carId: car.id.toString(),
  }))
}

export const metadata = {
    title: 'Volvo Cars Coding Test',
  };