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