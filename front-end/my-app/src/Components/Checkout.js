import React, { useState, useEffect } from 'react';
import { ChakraProvider, Alert, CloseButton, AlertTitle, AlertDescription, AlertIcon, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Input, Center, Image, SimpleGrid, Flex, Heading, Text, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
import { useNavigate } from 'react-router-dom';
import cookieProvider from './CookieProvider'
import AuthProvider from './AuthProvider.js';
import axios from 'axios';
import ConfettiFun from './ConfettiFun.js';
import GetCart from './GetCart.js';
import SuccessPage from './SuccessPage.js';
import { render } from '@testing-library/react';

function Checkout() {
    const history = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [cardNumber, setCardnumber] = useState('');
    const [csv, setCSV] = useState('');
    const [orderHash, setOrderHash] = useState('');
    const [confetti, setConfetti] = useState(false);


    function handleSubmit() {
        const params = new URLSearchParams();
        params.append('jwt', cookieProvider.getCookie("JWTCookie"));
        params.append('firstName', firstName)
        params.append('lastName', lastName)
        params.append('email', email)
        params.append('address', address)
        params.append('city', city)
        params.append('state', state)
        params.append('zipcode', zipcode)
        params.append('cardNumber', cardNumber)
        params.append('csv', csv)
        params.append('ecommerceCookie', cookieProvider.getCookie("ecommerceCookie"))
        axios.post('https://localhost:8843/api/order/checkout', params, {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"})
        .then((response) => {
            localStorage.setItem('orderHash', response.data);
            setOrderHash(response.data)
        }).then(() => {
            history('/Success');
        }).catch((error) => {
            console.log(error.message)
        })
    }

    function stats() {
        return (
            <Flex mt={4} mr={4} backgroundColor="gray.700" width="100%" alignItems="center" justifyContent="center">
                <Flex p={12} direction="column" background="gray.400" rounded={6} width="80%" height="60%">
                    <Heading textAlign="center" mb={6}>Checkout</Heading> 
                    <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="number" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Zip" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="number" value={cardNumber} onChange={(e) => setCardnumber(e.target.value)} placeholder="Card Number" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Input type="number" value={csv} onChange={(e) => setCSV(e.target.value)} placeholder="CSV" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
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
            </Flex>
        </ChakraProvider>
    )
}

export default Checkout