'use client';
import Image from 'next/image'
import { notFound } from 'next/navigation';
import { Card, Text, Spacer } from 'vcc-ui';

type carIdProperties = {
    params: {
        carId: string;
    }
}

const allCarIds = [
  "s60-recharge", "s90-recharge", "v60-recharge", "v90-recharge", "xc40-bev", "xc40-recharge", "xc60-recharge", "xc90-recharge"
];

export default function individualCarID({params : { carId }} : carIdProperties) {
  if(!allCarIds.includes(carId)) return notFound();
  return (
    <div>
        <Card>
            <Spacer />
            <Text variant="kelly" fg={'foreground.secondary'} subStyle={'emphasis'}>NEMANJA</Text>
            <Spacer />
            <Text variant="columbus" subStyle={'emphasis'}>CARID</Text>
            <Spacer />
            <Text variant="kelly" fg={'foreground.secondary'} subStyle={'emphasis'}>{carId}</Text>
            <Spacer />
        </Card>    
    </div>
  );
}