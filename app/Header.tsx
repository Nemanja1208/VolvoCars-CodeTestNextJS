import React from 'react'
import { useState } from 'react';
import {TabNav, TabNavItem} from 'vcc-ui'

export const Header: React.FC = () => {
    const [active, setActive] = React.useState(1);
    return (
        <div>
            <TabNav enableLineTransition>
                <TabNavItem
                    isActive={active === 1}
                    onClick={() => {
                    setActive(1);
                    }}
                >
                    Crossover/Wagon
                </TabNavItem>
                <TabNavItem
                    isActive={active === 2}
                    onClick={() => {
                    setActive(2);
                    }}
                >
                    SUV
                </TabNavItem>
                <TabNavItem
                    isActive={active === 3}
                    onClick={() => {
                    setActive(3);
                    }}
                >
                    Sedan
                </TabNavItem>
            </TabNav>
        </div>
    )
}
