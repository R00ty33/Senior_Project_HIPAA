import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Alert, Image, AlertIcon, AlertTitle, AlertDescription, SimpleGrid, Flex, Heading, Text, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
import { useNavigate } from 'react-router-dom';
import cookieProvider from './CookieProvider'
import AuthProvider from './AuthProvider.js';
import axios from 'axios';

export default function GetCart() {
    const [items, setItems] = useState('')
    const [subTotal, setSubTotal] = useState('')

    useEffect(() => {
        cookieProvider.checkForEcommerceCookie().then(() => {
            let cartCookie = cookieProvider.getCookie("ecommerceCookie")
            axios.post('https://localhost:8843/api/cart/getCart?cart_cookie='+ cartCookie, {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"})
            .then((response) => {
                setItems(organizeItems(response.data))
            }).catch((error) => {
                console.log(error.message)
            })
        })
    }, []); // [] = mount & unmount

    function organizeItems(data) {
        let formattedData = [];
        let total = 0;
        for (let i=0; i<data.length; i++) {
            let category = data[i].category
            let price = data[i].price
            let image = data[i].product_image
            let name = data[i].product_name
            let description = data[i].product_description
            setSubTotal((total += price).toFixed(2))
            formattedData.push(
                    <Box w="100%" p={0} ml={0} mt={0} borderWidth='1px' borderRadius='45px' mr={0} backgroundColor="gray.100">
                        <Heading mt={2} as='h4' size='sm'>{name}</Heading>
                        <Image boxSize='100px' src={image} ml={3} mt={0} mb={2} borderRadius='15px' float="left"/>
                        <Box mt={8} textAlign="left" ml={3} float="right" mr={3}>
                            <Heading as='h6' size='sm'>{category}</Heading>
                            <Box 
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            isTruncated
                            >
                                <Text fontSize='sm'>{price}</Text>
                            </Box>
                        </Box>
                    </Box>)
        }
        return (
            <SimpleGrid columns={1} spacing={2}>
                {formattedData}
            </SimpleGrid>
        )
    }

    return (
        <ChakraProvider>
        <Flex width="100%">
            <Flex  mt={4} backgroundColor="gray.100" width="100%" flexDirection="column" verticalAlign="top" textAlign="center">
            <SimpleGrid columns={1} spacing={8}>
                <Box p={8} ml={4} mr={4} mt={4} borderWidth='1px' borderRadius='45px' mr={4} backgroundColor="gray.400">
                    <Heading as='h4' size='md'>Cart</Heading>
                    <Flex height="auto" width="100%" mt={6} ml={10}>
                        {items}               
                    </Flex>
                </Box>
            </SimpleGrid>
                <Heading as="h1" size="lg">Total: USD ${subTotal}</Heading>
            </Flex>
        </Flex>
    </ChakraProvider>
    )
}