'use client';

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
interface Car {
    id: string,
    modelName: string,
    bodyType: string,
    modelType: string,
    imageUrl: string
}
export default function ListOfCars({allCars}) {
  return (
    <div>
      {allCars.map((car: Car) => (
        <div key={car.id}>{car.modelName}</div>
      ))}
    </div>
  );
}