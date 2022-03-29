import React, { useState, useEffect } from 'react';
import { ChakraProvider, Alert, CloseButton, AlertTitle, AlertDescription, AlertIcon, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Input, Center, Image, SimpleGrid, Flex, Heading, Text, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
import { useNavigate } from 'react-router-dom';
import cookieProvider from './CookieProvider'
import AuthProvider from './AuthProvider.js';
import axios from 'axios';
import GetCart from './GetCart.js';

function Orders() {
    const history = useNavigate();
    const [items, setItems] = useState('')

    useEffect(() => {
        cookieProvider.checkForEcommerceCookie().then(() => {
            let jwt = cookieProvider.getCookie("JWTCookie");
            axios.get('https://localhost:8843/api/order/orders?jwt='+ jwt, {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"})
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

        for (let k=0; k<data.length; k++) {
            let orderIdenifier = data[k].order_hash;
            formattedData.push(<Heading><br></br>Order Identifier: {orderIdenifier}</Heading>)

            console.log(data[k].inventory.length);
            for (let i=0; i<data[k].inventory.length; i++) {
                let category = data[k].inventory[i].category
                let price = data[k].inventory[i].price
                let image = data[k].inventory[i].product_image
                let name = data[k].inventory[i].product_name
                let description = data[k].inventory[i].product_description
                formattedData.push(
                    <>
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
                        </Box>
                    </>)
            }
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
                <Navbar/>
                <Flex ml={4} mt={4} mr={4} backgroundColor="gray.100" width="100%" flexDirection="column" verticalAlign="top" textAlign="center">
                <SimpleGrid columns={1} spacing={8}>
                    <Box p={8} ml={4} mr={4} mt={4} borderWidth='1px' borderRadius='45px' mr={4} backgroundColor="gray.400">
                        <Heading as='h4' size='md'>Orders</Heading>
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

export default Orders