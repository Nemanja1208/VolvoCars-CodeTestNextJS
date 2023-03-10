import { cache } from "react";
import { findChoosenCarById } from "../helperFunctions";
import { Car } from "../types";

const getAllCarsAPIUrl = 'http://localhost:3000/api/cars.json';

export const fetchAllCars = cache(async () =>  {
    const responseFromGetAllCarsApi = await fetch(getAllCarsAPIUrl);
    return await responseFromGetAllCarsApi.json();
});

export const getChoosenCarById = cache(async (carId: string) => {
    const allCars: Car[] = await fetchAllCars();
    const choosenCar: Car | undefined  = findChoosenCarById(allCars, carId);
    return choosenCar;
  });

// ADD ERROR HANDLING IN THE API