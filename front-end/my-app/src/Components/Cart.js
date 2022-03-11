import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Image, SimpleGrid, Flex, Heading, Text, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
import cookieProvider from './CookieProvider'
import axios from 'axios';

function Cart() {
    const [items, setItems] = useState('')

    useEffect(() => {
        let cartCookie = cookieProvider.getCookie("ecommerceCookie")
        axios.post('https://localhost:8843/api/cart/getCart?cart_cookie='+ cartCookie, {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"})
        .then((response) => {
            console.log(response.data);
            setItems(organizeItems(response.data))
        }).catch((error) => {
            console.log(error.message)
        })
    }, []); // [] = mount & unmount

    function organizeItems(data) {
        let formattedData = [];
        for (let i=0; i<data.length; i++) {
            let category = data[i].category
            let price = data[i].price
            let image = data[i].product_image
            let name = data[i].product_name
            let description = data[i].product_description
            formattedData.push(
                    <Box w='100%' p={0} ml={0} mt={0} borderWidth='1px' borderRadius='45px' mr={0} backgroundColor="gray.100">
                        <Heading mt={2} as='h4' size='md'>{name}</Heading>
                        <Image boxSize='150px' src={image} ml={8} mt={0} mb={6} borderRadius='15px' float="left"/>
                        <Box mt={8} textAlign="left" ml={60}>
                            <Heading as='h6' size='sm'>{category}</Heading>
                            <Box 
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            isTruncated
                            >
                                <Text fontSize='lg'>{price}</Text>
                            </Box><Text fontSize='sm' w="75%">{description}</Text>
                        </Box>
                    </Box>)
        }
        console.log("finsihed")
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
                <Flex ml={4} mt={4} mr={4} backgroundColor="gray.700" width="100%" flexDirection="column" verticalAlign="top" textAlign="center">
                <SimpleGrid columns={1} spacing={8}>
                    <Box p={8} ml={4} mr={4} mt={4} borderWidth='1px' borderRadius='45px' mr={4} backgroundColor="gray.400">
                        <Heading as='h4' size='md'>Cart</Heading>
                        <Flex height="auto" mt={6} ml={10}>
                            {items}                        
                        </Flex>
                    </Box>
                </SimpleGrid>
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}

export default Cart