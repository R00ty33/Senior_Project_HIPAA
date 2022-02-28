import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Flex, SimpleGrid, Stack, Text, Image, Heading, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
import axios from 'axios';
import {FaCartPlus} from 'react-icons/fa'



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

    function organizeItems(data) {
        let formattedData = [];
        for (let i=0; i<data.length; i++) {
            let category = data[i].category
            let price = data[i].price
            let image = data[i].product_image
            let name = data[i].product_name
            let description = data[i].product_description
            formattedData.push(
                <Box w='93%' p={4} ml={2} borderWidth='1px' borderRadius='45px' mr={2} backgroundColor="linkedin.100">
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
                        <Button leftIcon={<FaCartPlus/>} colorScheme='blue' size='xs'>Add To Cart</Button>
                    </Box>
                </Box>)
        }
        console.log("finsihed")
        return (
            <SimpleGrid columns={3} spacing={10}>
                {formattedData}
            </SimpleGrid>
        )
    }

    return (
        <ChakraProvider>
            <Flex width="100%">
                <Navbar/>
                <Flex height="auto" mt={6} ml={10}>
                    {items}
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}

export default Inventory