import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Flex, Stack, Text, Heading, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
import axios from 'axios';
function Inventory() {
    const [items, setItems] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8080/api/inventory/getAllItems/v1', {
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
            formattedData.push(<GridItem w='100%' h='20' bg='blue.500'><Text>{category}</Text><Text>{name}</Text></GridItem>)
        }
        console.log("finsihed")
        return (
            <Grid templateColumns='repeat(2, 2fr)' gap={6}>
                {formattedData}
            </Grid>
        )
    }

    return (
        <ChakraProvider>
            <Flex width="100%">
                <Navbar/>
                <Flex height="100vh" mt={6} ml={10}>
                    {items}
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}

export default Inventory