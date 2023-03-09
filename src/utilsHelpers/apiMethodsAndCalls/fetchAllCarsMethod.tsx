const getAllCarsAPIUrl = 'http://localhost:3000/api/cars.json';

export async function fetchAllCars() {
    const responseFromGetAllCarsApi = await fetch(getAllCarsAPIUrl, {cache: 'force-cache'});
    const allCars = await responseFromGetAllCarsApi.json();
    return allCars;
}