'use client';

import Image from 'next/image'
import { Card, Text, Spacer } from 'vcc-ui';
import Link from 'next/link';

export default function individualCar({ car }) {
  return (
    <div>
        <Card>
        <Link href={`/learn/${car.id}`}>
            <Spacer />
            <Text variant="kelly" fg={'foreground.secondary'} subStyle={'emphasis'}>{car.bodyType.toUpperCase()}</Text>
            <Spacer />
            <Text variant="columbus" subStyle={'emphasis'}>{car.modelName}</Text>
            <Spacer />
            <Text variant="kelly" fg={'foreground.secondary'} subStyle={'emphasis'}>{car.modelType}</Text>
            <Spacer />
            <Image
            src={car.imageUrl}
            alt={car.modelName}
            width={250}
            height={250}
            />
        </Link>
        </Card>
        
    </div>
  );
}