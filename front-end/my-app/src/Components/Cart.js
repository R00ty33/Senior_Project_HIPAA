import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Flex, Heading, Text, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
function Cart() {

    return (
        <ChakraProvider>
            <Flex width="100%">
                <Navbar/>
            </Flex>
        </ChakraProvider>
    )
}

export default Cart