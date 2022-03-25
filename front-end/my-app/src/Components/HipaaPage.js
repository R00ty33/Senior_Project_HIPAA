import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Flex, Heading, Text, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'

function HippaPage() {


    /** suh dude */

    return (
        <ChakraProvider>
            <Flex width="100%">
                <Navbar/>
                <Flex ml={4} mt={4} mr={4} backgroundColor="gray.700" display="inline" width="100%" flexDirection="column" justifyContent="center" verticalAlign="top" textAlign="center">

                </Flex>
            </Flex>
        </ChakraProvider>
    )
}

export default HippaPage