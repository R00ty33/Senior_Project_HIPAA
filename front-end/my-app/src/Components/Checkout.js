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
import cardValidator from 'card-validator';
const validator = require("email-validator");


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
    const [cvv, setCVV] = useState('');
    const [orderHash, setOrderHash] = useState('');
    const [confetti, setConfetti] = useState(false);
    var valid = require("card-validator");


    function handleSubmit() {
        if (!validateValues()) {
            // throw error
            console.log("Credit Card Information not Valid")
        } else {
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
            params.append('csv', cvv)
            params.append('ecommerceCookie', cookieProvider.getCookie("ecommerceCookie"))
            axios.post('https://localhost:8843/api/order/checkout', params, {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"})
            .then((response) => {
                localStorage.setItem('orderHash', response.data);
                setOrderHash(response.data)
                cookieProvider.deleteCookie("ecommerceCookie");
            }).then(() => {
                cookieProvider.getEcommerceCookie();
                history('/Success');
            }).catch((error) => {
                console.log(error.message)
            })
        }
    }

    function validateValues() {
        let result = true;
        var reWhiteSpace = new RegExp("\\s+");
        if ((firstName != '' && !reWhiteSpace.test(firstName))) {
            setFirstName(true)
            result = false;
        }
        if ((lastName != '' && !reWhiteSpace.test(lastName))) {
            setLastName(true)
            result = false;
        }
        if ((email != '' && !reWhiteSpace.test(email) || !validator.validate(email))) {
            setEmail(true)
            result = false;
        }
        if ((address != '' && !reWhiteSpace.test(address))) {
            setAddress(true)
            result = false;
        }
        if ((city != '' && !reWhiteSpace.test(city))) {
            setCity(true)
            result = false;
        }
        if ((state != '' && !reWhiteSpace.test(state))) {
            setState(true)
            result = false;
        }
        if (zipcode == '' || zipcode == null || zipcode == new RegExp('^[0-9]*$') || valid.postalCode(zipcode).isInvalid) {
            setZipcode(true);
            result = false;
        }
        if (cardNumber == '' || cardNumber == null || cardNumber == new RegExp('^[0-9]*$') || valid.number(cardNumber).isInvalid) {
            setCardnumber(true);
            result = false;
        }
        if (cvv == '' || cvv == null || cvv == new RegExp('^[0-9]*$') || valid.cvv(cvv).isInvalid) {
            setCVV(true);
            result = false;
        }
        return result;
    }

    const CVVAlert = () => {
        if (cvv) {
            return (
                <Alert status="error" mb={3}>
                    <AlertIcon />
                    <AlertTitle mr={2}></AlertTitle>
                    <AlertDescription>Invalid CVV</AlertDescription>
                    <CloseButton position="absolute" onClick={() => setCVV(false)} right="6px" top="8px"/>
                </Alert>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    const CardNumberAlert = () => {
        if (cardNumber) {
            return (
                <Alert status="error" mb={3}>
                    <AlertIcon />
                    <AlertTitle mr={2}></AlertTitle>
                    <AlertDescription>Invalid Card-Number</AlertDescription>
                    <CloseButton position="absolute" onClick={() => setCardnumber(false)} right="6px" top="8px"/>
                </Alert>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    const ZipcodeAlert = () => {
        if (zipcode) {
            return (
                <Alert status="error" mb={3}>
                    <AlertIcon />
                    <AlertTitle mr={2}></AlertTitle>
                    <AlertDescription>Invalid Postal Code</AlertDescription>
                    <CloseButton position="absolute" onClick={() => setZipcode(false)} right="6px" top="8px"/>
                </Alert>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    const StateAlert = () => {
        if (state) {
            return (
                <Alert status="error" mb={3}>
                    <AlertIcon />
                    <AlertTitle mr={2}></AlertTitle>
                    <AlertDescription>Invalid State</AlertDescription>
                    <CloseButton position="absolute" onClick={() => setState(false)} right="6px" top="8px"/>
                </Alert>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    const CityAlert = () => {
        if (city) {
            return (
                <Alert status="error" mb={3}>
                    <AlertIcon />
                    <AlertTitle mr={2}></AlertTitle>
                    <AlertDescription>Invalid City</AlertDescription>
                    <CloseButton position="absolute" onClick={() => setCity(false)} right="6px" top="8px"/>
                </Alert>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    const AddressAlert = () => {
        if (address) {
            return (
                <Alert status="error" mb={3}>
                    <AlertIcon />
                    <AlertTitle mr={2}></AlertTitle>
                    <AlertDescription>Invalid Address</AlertDescription>
                    <CloseButton position="absolute" onClick={() => setAddress(false)} right="6px" top="8px"/>
                </Alert>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    const FirstNameAlert = () => {
        if (firstName) {
            return (
                <Alert status="error" mb={3}>
                    <AlertIcon />
                    <AlertTitle mr={2}></AlertTitle>
                    <AlertDescription>Invalid String</AlertDescription>
                    <CloseButton position="absolute" onClick={() => setFirstName(false)} right="6px" top="8px"/>
                </Alert>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    const EmailAlert = () => {
        if (email) {
            return (
                <Alert status="error" mb={3}>
                    <AlertIcon />
                    <AlertTitle mr={2}></AlertTitle>
                    <AlertDescription>Invalid Email</AlertDescription>
                    <CloseButton position="absolute" onClick={() => setEmail(false)} right="6px" top="8px"/>
                </Alert>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    
    const LastNameAlert = () => {
        if (lastName) {
            return (
                <Alert status="error" mb={3}>
                    <AlertIcon />
                    <AlertTitle mr={2}></AlertTitle>
                    <AlertDescription>Invalid String</AlertDescription>
                    <CloseButton position="absolute" onClick={() => setLastName(false)} right="6px" top="8px"/>
                </Alert>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }


    function stats() {
        return (
            <Flex mt={4} mr={4} backgroundColor="gray.700" width="100%" alignItems="center" justifyContent="center">
                <Flex p={12} direction="column" background="gray.400" rounded={6} width="80%" height="60%">
                    <Heading textAlign="center" mb={6}>Checkout</Heading> 
                    <FirstNameAlert/>
                    <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <LastNameAlert/>
                    <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <EmailAlert/>
                    <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <AddressAlert/>
                    <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <CityAlert/>
                    <Input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <StateAlert/>
                    <Input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <ZipcodeAlert/>
                    <Input type="number" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Zip" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <CardNumberAlert/>
                    <Input type="number" value={cardNumber} onChange={(e) => setCardnumber(e.target.value)} placeholder="Card Number" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <CVVAlert/>
                    <Input type="number" value={cvv} onChange={(e) => setCVV(e.target.value)} placeholder="CVV" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
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