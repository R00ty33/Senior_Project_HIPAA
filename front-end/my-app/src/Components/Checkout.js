import React, { useState, useEffect } from 'react';
import { ChakraProvider, Alert, AlertTitle, AlertDescription, AlertIcon, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Input, Center, Image, SimpleGrid, Flex, Heading, Text, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
import { useNavigate } from 'react-router-dom';
import cookieProvider from './CookieProvider'
import AuthProvider from './AuthProvider.js';
import axios from 'axios';
import ConfettiFun from './ConfettiFun.js';
import GetCart from './GetCart.js';

function Checkout() {
    const history = useNavigate();
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [confetti, setConfetti] = useState(false);

    function HandleConfetti() {
        if (confetti) {
            return (
                <ConfettiFun/>
            )
        }
        else {
            return (
                <>
                </>
            )
        }
    }

    const handleAge = e => {
        setAge(e.target.value)
    }

    const handleWeight = e => {
        setWeight(e.target.value)
    }

    const handleHeight = e => {
        setHeight(e.target.value)
    }

    function handleSubmit() {
        setConfetti(true)
    }

    function stats() {
        return (
            <Flex mt={4} mr={4} backgroundColor="#48D1CC" width="100%" alignItems="center" justifyContent="center">
                <Flex p={12} direction="column" background="#48D1CC" rounded={6} width="70%">
                    <Heading mb={6}>Checkout</Heading> 
                    <Input type="text" value={height} placeholder="Name" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="text" value={height} placeholder="Email" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="text" value={height} placeholder="Address" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="text" value={height} placeholder="City" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="text" value={height} placeholder="State" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="number" value={height} placeholder="Zip" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="number" value={height} placeholder="Card Number" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="number" value={height} placeholder="CSV" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Button mb={6} size="md" colorScheme="red" onClick={handleSubmit}>Pay</Button>
                </Flex>
            </Flex>
        )
    }
    return (
        <ChakraProvider>
            <Flex ml={6} width="100%" >
                <Navbar/>
                <GetCart/>
                {stats()}
                <HandleConfetti/>
            </Flex>
        </ChakraProvider>
    )
}

export default Checkout