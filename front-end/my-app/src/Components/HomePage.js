import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Flex, Heading, Text, Image, Link, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
function Home() {

    return (
        <ChakraProvider>
            <Flex width="100%">
                <Navbar/>
                <Flex ml={4} mt={4} mr={4}  backgroundImage="url('https://img.freepik.com/free-vector/clean-medical-background_53876-116875.jpg?w=2000')" backgroundSize={1730}
                 display="inline" width="100%" flexDirection="column" justifyContent="center" verticalAlign="top" textAlign="center">
                    
                    <Box bg='white' h='8%' w='100%' p={4} color="teal.500" fontWeight='semibold' fontSize='32'>
                    Hungry Hungry HIPAAS                    
                    </Box>
                    
                    <Flex> 
                    <Link href='/Inventory'>
                    <Image
                     borderRadius='full'
                     boxSize="60px"
                     src="https://img.freepik.com/free-vector/cute-hippo-with-hot-coffee-cute-animal-cartoon-illustration_290315-1568.jpg"
                     alt="Segun Adebayo"
                     pos="absolute" top="7" right="620"
                    />
                    </Link>


                    <Text ml={750} mt={200} mr={4} fontSize="90px" fontFamily='serif' fontWeight='semibold' color='black.100'>
                        HHH
                    </Text>

                    <Text ml={-320} mt={330} mr={4} fontSize="30px" fontFamily='body' fontWeight='thin' color='black.100'>
                        We Make Feel Better Come To Life
                    </Text>
                    <Link href='/Inventory'>
                    <Button colorScheme='teal' ml={-475} mt={430} mr={4} size="lg" height='58px' border='1px' variant='solid'>Shop Now</Button> 
                    </Link>
                     </Flex>
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}

export default Home