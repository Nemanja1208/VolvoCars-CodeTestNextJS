'use client';
import { Flex, Spacer} from 'vcc-ui';
import Link from 'next/link';
import { Link as VolvoLink} from 'vcc-ui'
import { CarInterface } from '../types';

export const CallToActionComponent = ({car}: CarInterface) => {
    return (
        <div>
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
        </div>
        
    )
}