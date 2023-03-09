'use client';

import Image from 'next/image'
import { Card, Text, Spacer, Flex, Icon } from 'vcc-ui';
import Link from 'next/link';
import { Link as VolvoLink} from 'vcc-ui'
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
            <Flex extend={{ flexDirection: "row", justifyContent: 'space-evenly', width: '100%' }}>
                <Link className='linkStyle' href={`/learn/${car.id}`}>
                    <VolvoLink arrow="right">
                        Learn
                    </VolvoLink>
                </Link>
                <Link className='linkStyle' href={`/shop/${car.id}`}>
                    <VolvoLink arrow="right">
                        Shop
                    </VolvoLink>
                </Link>
            </Flex>
        </Card> 
    </div>
  );
}