import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, SimpleGrid, Flex, Heading, Text, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
function Cart() {
    return (
        <ChakraProvider>
            <Flex width="100%">
                <Navbar/>
                <Flex ml={4} mt={4} mr={4} backgroundColor="gray.700" width="100%" flexDirection="column" verticalAlign="top" textAlign="center">
                <SimpleGrid columns={1} spacing={8}>
                    <Box w='93%' p={8} ml={4} mt={4} borderWidth='1px' borderRadius='45px' mr={4} backgroundColor="gray.100">
                        <Heading as='h4' size='md'>Cart</Heading>
                        <Box textAlign="left" mt={6}>
                            <Heading as='h6' size='sm'>Item</Heading>
                            <Text>Test</Text>
                        </Box>
                    </Box>
                </SimpleGrid>
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}

export default Cart