import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Flex, Heading, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
function Home() {

    return (
        <ChakraProvider>
            <Flex width="100%">
                <Navbar/>
                <Flex ml={40}>
                    <Heading display="center" align="center" color="#1E90FF" textAlign="center">Hungry Hungry HIPAAS</Heading>
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}

export default Home