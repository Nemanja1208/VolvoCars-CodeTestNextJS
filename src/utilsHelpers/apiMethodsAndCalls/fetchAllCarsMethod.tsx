import { cache } from "react";
import { findChoosenCarById } from "../helperFunctions";
import { Car } from "../types";

const getAllCarsAPIUrl = 'http://localhost:3000/api/cars.json';

export const fetchAllCars = cache(async () =>  {
    try {
        const responseFromGetAllCarsApi = await fetch(getAllCarsAPIUrl);
        if (!responseFromGetAllCarsApi.ok) {
            throw new Error(`Error fetching all cars: ${responseFromGetAllCarsApi.status}`);
        }
        return await responseFromGetAllCarsApi.json();
    } catch (error) {
        console.error(error);
        return [];
    }
});

export const getChoosenCarById = cache(async (carId: string) => {
    try {
        const allCars: Car[] = await fetchAllCars();
        const choosenCar: Car | undefined  = findChoosenCarById(allCars, carId);
        if (!choosenCar) {
            throw new Error(`Car with id ${carId} not found`);
        }
        return choosenCar;
    } catch (error) {
        console.error(error);
        return undefined;
    }
});
