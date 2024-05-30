import React from 'react';
import { Button } from '@chakra-ui/react';
import DarkMode from './DarkMode';

const NavigationBar = ({ openModal }) => {

    return (
        <nav >
            <ul>
                <li>
                    <Button onClick={openModal} colorScheme="teal">
                        + Sale Order
                    </Button>
                </li>
                <li>
                <Button colorScheme='green'>Completed Order</Button>
                </li>
                 <li>           
                 <Button colorScheme='pink'>Active Order</Button>
                 </li>
                 <li>
                 <DarkMode />
                 </li>
               
            </ul>
        </nav>
    );
};

export default NavigationBar;

