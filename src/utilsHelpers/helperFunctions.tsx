import { Car } from "./types";

export const returnUniqueCarBodytypes = (allCars: Car[]) => {
    const allCarBodyTypes = allCars.map((car: Car) => car.bodyType);

    const uniqueCarBodyTypes = allCarBodyTypes.filter((element: string, index: number) => {
      return allCarBodyTypes.indexOf(element) === index;
    });

    return uniqueCarBodyTypes;
}