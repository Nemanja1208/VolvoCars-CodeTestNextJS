import { isTypeOfExpression } from "typescript";
interface CarInterface {
    car: Car;
}
interface AllCars {
    carsToShow: Car[];
}

interface resetInterface {
    reset: () => void;
}

type carIdProperties = {
    params: {
        carId: string;
    }
}

type Car = {
    id: string,
    modelName: string,
    bodyType: string,
    modelType: string,
    imageUrl: string
}


type parametersToReRender = {
    id: {
      toString: () => string;
    };
};

type allCarIds = {
    carId: string;
}