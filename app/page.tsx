import React from 'react';
import { Car } from '../src/helpers/types';
import {ListOfCars} from './cars/listOfCars';

const getAllCarsAPIUrl = 'http://localhost:3000/api/cars.json';

async function getAllCars() {
  const responseFromGetAllCarsApi = await fetch(getAllCarsAPIUrl);
  const allCars = await responseFromGetAllCarsApi.json();
  return allCars;
}

export default async function Homepage() {

  const allCars: Car[] = await getAllCars();

  return <ListOfCars allCars={allCars} />;
}

export const metadata = {
    title: 'Volvo Cars Coding Test',
  };