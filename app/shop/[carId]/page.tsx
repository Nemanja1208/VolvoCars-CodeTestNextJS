import React from 'react';
import { Car, carIdProperties } from '../../../src/utilsHelpers/types';
import { CarInformationComponent } from '../../../src/utilsHelpers/carComponents/carInformation';
import { getChoosenCarById } from '../../../src/utilsHelpers/helperFunctions';
import "../../../public/css/styles.css";
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Volvo Cars Shop',
};

export default async function VolvoCarsShopPage({params : { carId }} : carIdProperties) {
  const choosenCar: Car = await getChoosenCarById(carId);
  return (
    <div>
    <p className="detailsNavStyleSimple">Welcome to the shop page</p>
    <Link className="homeLinkStyle" href={`/`}>Home</Link>
    <CarInformationComponent car={choosenCar} />
    <Image
      className='imageStyle'
      src={choosenCar.imageUrl}
      alt={choosenCar.modelName}
      width={200}
      height={50}
      />
    </div>
  );
}