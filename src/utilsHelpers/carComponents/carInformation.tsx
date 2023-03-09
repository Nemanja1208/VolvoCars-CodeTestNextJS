'use client';
import { Spacer, Text, Flex } from 'vcc-ui';
import { CarInterface } from '../types';

export const CarInformationComponent = ({car}: CarInterface) => {
    return (
        <div>
            <Spacer />
            <Text variant="kelly" fg={'foreground.secondary'} subStyle={'emphasis'}>{car.bodyType.toUpperCase()}</Text>
            <Spacer />
            <Flex className="breakWordStyle">
                <Text variant="hillary" subStyle={'emphasis'}>{car.modelName}</Text>
                <Spacer />
                <Text className='carModelTypeStyle' variant="kelly" fg={'foreground.secondary'} subStyle={'emphasis'}>{car.modelType}</Text>
            </Flex>
            <Spacer />
        </div>
    )
}