import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Flex, Heading, Text, SimpleGrid, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
import CookieProvider from './CookieProvider.js';
import AuthProvider from './AuthProvider.js';
import axios from 'axios';

function AdminPage() {
    const [items, setItems] = useState('')

    useEffect(() => {
        axios.get('https://localhost:8843/Profile/Admin/GetPHI?jwt='+ CookieProvider.getCookie("JWTCookie"), {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"})
        .then((response) => {
            setItems(organizeItems(response.data));
        }).catch((error) => {
            console.log(error.message);
        })
    }, []); // [] = mount & unmount

    
    function organizeItems(data) {
        let formattedData = [];
        let total = 0;
        for (let i=0; i<data.length; i++) {
            let firstName = data[i].first_name
            let lastName = data[i].last_name
            let age = data[i].age
            let height = data[i].height
            let weight  = data[i].weight
            formattedData.push(
                    <Box w='93%' p={8} ml={4} mt={4} borderWidth='1px' borderRadius='45px' mr={4} backgroundColor="gray.100">
                        <Heading mt={2} as='h4' size='md'>{firstName + " " + lastName}</Heading>
                            <Text ml={6} textAlign="left">Age:  {age}</Text>
                            <Text ml={6} textAlign="left">Height:  {height}</Text>
                            <Text ml={6} textAlign="left">Weight:  {weight}</Text>
                    </Box>)
        }
        return (
            <SimpleGrid columns={4} spacing={6}>
                {formattedData}
            </SimpleGrid>
        )
    }

    return (
    <ChakraProvider>
        <Flex width="100%">
            <Navbar/>
            <Flex ml={4} mt={4} mr={4} backgroundColor="gray.700" width="100%" flexDirection="column" verticalAlign="top" textAlign="center">
            <SimpleGrid columns={1} spacing={8}>
                <Box p={8} ml={4} mr={4} mt={4} borderWidth='1px' borderRadius='45px' mr={4} backgroundColor="gray.400">
                    <Heading as='h4' size='md'>Admin Panel</Heading>
                    <Flex height="auto" width="100%" mt={6} ml={10}>
                        {items}               
                    </Flex>
                </Box>
            </SimpleGrid>
            </Flex>
        </Flex>
    </ChakraProvider>
    )
}

export default AdminPage