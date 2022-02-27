import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Flex, Heading, Text, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
function Home() {

    return (
        <ChakraProvider>
            <Flex width="100%">
                <Navbar/>
                <Flex ml={20} display="inline" flexDirection="column" justifyContent="center" verticalAlign="top" textAlign="center">
                    <Heading color="#1E90FF">Hungry Hungry HIPAAS</Heading>
                    <Text mt={6} fontSize="lg">
                        Hello World,<br></br>
                        Welcome to the Hungry Hungry HIPAAS Senior Project. <br></br>
                        We built a fullstack ecommerce web application which facilitates and sells over the counter medical drugs.<br></br>
                        Our ecommerece website stringly follows all HIPAA & PCI/DSS regulations. <br></br>
                        All users must create an account & complete their profile to checkout.
                    </Text>
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}

export default Home