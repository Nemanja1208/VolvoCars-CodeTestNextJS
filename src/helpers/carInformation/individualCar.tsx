'use client';

import Image from 'next/image'
import { Card, Text, Spacer, Flex, Icon } from 'vcc-ui';
import Link from 'next/link';
import "../../../public/css/styles.css";

export default function individualCar({ car }) {
  return (
    <div>
        <Card className='cardStyle'>
            <Spacer />
            <Text variant="kelly" fg={'foreground.secondary'} subStyle={'emphasis'}>{car.bodyType.toUpperCase()}</Text>
            <Spacer />
            <Text variant="hillary" subStyle={'emphasis'}>{car.modelName}</Text>
            <Spacer />
            <Text variant="kelly" fg={'foreground.secondary'} subStyle={'emphasis'}>{car.modelType}</Text>
            <Spacer />
            <Image
            src={car.imageUrl}
            alt={car.modelName}
            width={250}
            height={250}
            />
            <Spacer />
        <Flex extend={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Link className='linkStyle' href={`/learn/${car.id}`}>
                <Text className='linkStyle' variant="amundsen" >{"LEARN "}<Icon color='#326bb4' type="navigation-chevronforward-12"></Icon></Text>
                
            </Link>
            <Link className='linkStyle' href={`/shop/${car.id}`}>
                <Text className='linkStyle' variant="amundsen" >{"SHOP "}<Icon color='#326bb4' type="navigation-chevronforward-12"></Icon></Text>
            </Link>
        </Flex>
        </Card> 
    </div>
  );
}