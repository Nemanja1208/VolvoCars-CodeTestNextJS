'use client';

import Image from 'next/image'
import { Card } from 'vcc-ui';
import {CallToActionComponent} from './callToAction';
import "../../../public/css/styles.css";
import { CarInterface } from '../types';
import { CarInformationComponent } from './carInformation';

export default function CarCardDesignElement({ car } : CarInterface) {
  return (
    <div>
        <Card className='cardStyle'>
            <CarInformationComponent car={car}/>
            <Image
            className='imageStyle'
            src={car.imageUrl}
            alt={car.modelName}
            width={200}
            height={50}
            />
            <CallToActionComponent car={car}/>
        </Card> 
    </div>
  );
}