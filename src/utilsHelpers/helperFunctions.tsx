import { fetchAllCars } from "./apiMethodsAndCalls/fetchAllCarsMethod";
import { Car, parametersToReRender } from "./types";

export const returnUniqueCarBodytypes = (allCars: Car[]) => {
    const allCarBodyTypes = allCars.map((car: Car) => car.bodyType);

    const uniqueCarBodyTypes = allCarBodyTypes.filter((element: string, index: number) => {
      return allCarBodyTypes.indexOf(element) === index;
    });

    return uniqueCarBodyTypes;
}

export const filterCarsAccordingToBodytype = (allCars: Car[], choosenBodytype: string) => {
  return allCars.filter(cars => cars.bodyType === choosenBodytype)
}

export const returnAllAvailableParametersToReRender = (allCars: Car[]) => {
  return allCars.map((car: parametersToReRender) => ({
    carId: car.id.toString(),
  }))
}

export const findChoosenCarById = (allCars: Car[],carId: string) => {
  return allCars.find(car => car.id === carId);
}

export async function getChoosenCarById(carId: string) {
  const allCars: Car[] = await fetchAllCars();
  const choosenCar: Car = findChoosenCarById(allCars, carId);
  return choosenCar;
}