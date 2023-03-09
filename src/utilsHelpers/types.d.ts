import { isTypeOfExpression } from "typescript";
interface CarInterface {
    car: Car;
}

type Car = {
    id: string,
    modelName: string,
    bodyType: string,
    modelType: string,
    imageUrl: string
}
interface AllCars {
    carsToShow: Car[];
}

type parametersToReRender = {
    id: {
      toString: () => string;
    };
};

type allCarIds = {
    carId: string;
}