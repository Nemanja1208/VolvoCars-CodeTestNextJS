'use client';

import Image from 'next/image'
import { Card, Text, Spacer, Flex } from 'vcc-ui';
import {CallToActionComponent} from './callToAction';
import "../../../public/css/styles.css";
import { CarInterface } from '../types';

export default function cardElementForCars({ car } : CarInterface) {
  return (
    <div>
        <Card className='cardStyle'>
            <Spacer />
            <Text variant="kelly" fg={'foreground.secondary'} subStyle={'emphasis'}>{car.bodyType.toUpperCase()}</Text>
            <Spacer />
            <Flex className="breakWordStyle">
                <Text variant="hillary" subStyle={'emphasis'}>{car.modelName}</Text>
                <Spacer />
                <Text className='carModelTypeStyle' variant="kelly" fg={'foreground.secondary'} subStyle={'emphasis'}>{car.modelType}</Text>
            </Flex>
            <Spacer />
            <Image
            className='imageStyle'
            src={car.imageUrl}
            alt={car.modelName}
            width={200}
            height={50}
            />
            <Spacer />
            <CallToActionComponent car={car}/>
        </Card> 
    </div>
  );
}