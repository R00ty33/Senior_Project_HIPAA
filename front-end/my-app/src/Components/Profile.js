import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Flex, Heading, Text, useColorMode, Input, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'

function Profile() {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const handleAge = e => {
        setAge(e.target.value)
    }

    const handleWeight = e => {
        setWeight(e.target.value)
    }

    const handleHeight = e => {
        setHeight(e.target.value)
    }

    function stats() {
        return (
            <Flex ml={4} mt={4} mr={4} backgroundColor="gray.700" width="100%" alignItems="center" justifyContent="center">
                <Flex p={12} direction="column" background="gray.100" rounded={6} >
                    <Heading mb={6}>User Details</Heading> 
                    <Input type="number" value={age} onChange={handleAge} placeholder="Age (years)" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="number" value={weight} onChange={handleWeight} placeholder="Weight (lbs)" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="number" value={height} onChange={handleHeight} placeholder="Height (ft)" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Button mb={6} size="md" colorScheme="red">Submit</Button>
                </Flex>
            </Flex>
        )
    }
    return (
        <ChakraProvider>
            <Flex width="100%" >
                <Navbar/>
                {stats()}
            </Flex>
        </ChakraProvider>
    )
}

export default Profile