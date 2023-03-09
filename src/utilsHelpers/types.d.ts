import { isTypeOfExpression } from "typescript";

type Car = {
    id: string,
    modelName: string,
    bodyType: string,
    modelType: string,
    imageUrl: string
}

interface AllCars {
    allCars: Car[];
}