import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Flex, Heading, Text, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
import ConfettiFun from './ConfettiFun.js';
import { useNavigate } from 'react-router-dom';


function SuccessPage() {
    const history = useNavigate();

    return (
        <ChakraProvider>
            <Flex width="100%">
                <Navbar/>
                <Flex ml={4} mt={4} mr={4} backgroundColor="gray.700" width="100%" flexDirection="column" justifyContent="center" textAlign="center">
                    <Heading color="#1E90FF">Order Identifier: {localStorage.getItem("orderHash")}</Heading>
                    <Flex backgroundColor="gray.700" alignItems="center" justifyContent="center">
                        <Flex p={6} direction="column" background="gray.700" rounded={6} >
                        <Button onClick={() => history('/Orders')} size="lg" colorScheme="red" widt="auto" >Go To My Orders</Button>
                        </Flex>
                    </Flex>
                    <ConfettiFun/>
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}

export default SuccessPage