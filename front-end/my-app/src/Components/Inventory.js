import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Flex, SimpleGrid, Stack, Text, Image, Heading, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
import axios from 'axios';
import {FaCartPlus} from 'react-icons/fa'
import CookieProvider from './CookieProvider.js';


function Inventory() {
    const [items, setItems] = useState('')

    useEffect(() => {
        axios.get('https://localhost:8843/api/inventory/getAllItems/v1', {
        }).then((response) => {
            console.log(response.data);
            setItems(organizeItems(response.data))
        }).catch((error) => {
            console.log(error.message)
        })
    }, []); // [] = mount & unmount

    function addToCart(item) {
        const params = new URLSearchParams();
        params.append('product_name', item);
        params.append('cart_cookie', CookieProvider.getCookie("ecommerceCookie"));
        axios.post('https://localhost:8843/api/cart/addItem', params, {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"}).then((response) => {

        }).catch((error) => {
             console.log(error.message);
        })
    }

    function organizeItems(data) {
        let formattedData = [];
        for (let i=0; i<data.length; i++) {
            let category = data[i].category
            let price = data[i].price
            let image = data[i].product_image
            let name = data[i].product_name
            let description = data[i].product_description
            formattedData.push(
                    <Box w='93%' p={8} ml={4} mt={4} borderWidth='1px' borderRadius='45px' mr={4} backgroundColor="gray.100">
                    <Heading as='h4' size='md'>{name}</Heading>
                    <Image boxSize='200px' src={image} mt={2} mb={2} borderRadius='15px'/>
                    <Box>
                        <Heading as='h6' size='sm'>{category}</Heading>
                        <Text fontSize='sm' w="75%">{description}</Text>
                    </Box>
                    <Box 
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                    >
                        <Text fontSize='lg'>{price}</Text>
                        <Button id={name} leftIcon={<FaCartPlus/>} colorScheme='blue' size='xs' onClick={() => addToCart(name)}>Add To Cart</Button>
                    </Box>
                </Box>)
        }
        console.log("finsihed")
        return (
            <SimpleGrid columns={3} spacing={8}>
                {formattedData}
            </SimpleGrid>
        )
    }

    return (
        <ChakraProvider>
            <Flex width="100%">
                <Navbar/>
                <Flex height="auto" mt={6} ml={10} backgroundColor="gray.700">
                    {items}
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}

export default Inventory