import React from 'react';
import cars from '../public/api/cars.json'
import ListOfCars from './listOfCars';

const url = 'http://localhost:3000/api/cars.json'

async function getAllCars() {
  const res = await fetch(url);
  const cars = await res.json();
  return cars;
}

export default async function Homepage() {
  // Fetch data directly in a Server Component
  const allCars = await getAllCars();
  // Forward fetched data to your Client Component
  return <ListOfCars allCars={allCars} />;
}

// const Homepage: React.FC = () => {
//   return (<h1>Hello World!</h1>);
// };

export const metadata = {
    title: 'Volvo Cars Coding Test',
  };