import React from 'react';
import { CarInformationComponent } from '../../../src/utilsHelpers/carComponents/carInformation';
import { getChoosenCarById } from '../../../src/utilsHelpers/apiMethodsAndCalls/fetchAllCarsMethod';
import { Car, carIdProperties } from '../../../src/utilsHelpers/types';
import "../../../public/css/styles.css";
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Volvo Cars Learn',
};

export default async function VolvoCarsLearnPage({params : { carId }} : carIdProperties) {
  const choosenCar: Car | undefined = await getChoosenCarById(carId);
  if(choosenCar === undefined) return notFound();
  return (
    <div>
    <p className="detailsNavStyleSimple">Welcome to the learn page</p>
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
