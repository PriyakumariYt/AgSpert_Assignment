import React from 'react';
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
const DarkMode = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('Dark Mode', 'Light Mode');
  const Icon = useColorModeValue(MoonIcon, SunIcon);
return (
    <Button onClick={toggleColorMode} colorScheme="blue" leftIcon={<Icon />}>
      {text}
    </Button>
  );
};

export default DarkMode;
