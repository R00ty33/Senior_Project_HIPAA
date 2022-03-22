import React, { useState, useEffect } from 'react';
import { ChakraProvider, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Center, Flex, Heading, Text, useColorMode, Input, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
import axios from 'axios'; // API 
import CookieProvider from './CookieProvider'
import ConfettiFun from './ConfettiFun.js';

function Profile() {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [ageAlertValue, setAgeAlertValue] = useState(false);
    const [weightAlertValue, setWeightAlertValue] = useState(false);
    const [heightAlertValue, setHeightAlertValue] = useState(false);
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
        if (validateValues()) {
            const params = new URLSearchParams();
            params.append('jwt', CookieProvider.getCookie("JWTCookie"));
            params.append('age', age);
            params.append('weight', weight);
            params.append('height', height);
            axios.post('https://localhost:8843/Profile/PHI', params, {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"}).then((response) => {
                setConfetti(true);
            }).catch((error) => {
                 console.log(error.message);
            })
        }
    }

    function validateValues() {
        let result = true;
        if (age == '' || age == null || age == new RegExp('^[0-9]*$') || age < 18) {
            setAgeAlertValue(true);
            result = false;
        }
        if (weight == '' || weight == null || weight == new RegExp('^[0-9]*$')) {
            setWeightAlertValue(true);
            result = false;
        }
        if (height == '' || height == null || height == new RegExp('^[0-9]*$')) {
            setHeightAlertValue(true);
            result = false;
        }
        return result;
    }

    const HandleAgeAlert = () => {
        if (ageAlertValue) {
            return ageAlert();
        }
        else {
            return (
                <div></div>
            )
        }
    }

    function ageAlert() {
        return (
            <Alert status="error" mb={3}>
                <AlertIcon />
                <AlertTitle mr={2}></AlertTitle>
                <AlertDescription>Invalid Value</AlertDescription>
                <CloseButton position="absolute" onClick={() => setAgeAlertValue(false)} right="6px" top="8px"/>
            </Alert>
        )
    }
    
    
    const HandleWeightAlert = () => {
        if (weightAlertValue) {
            return weightAlert();
        }
        else {
            return (
                <div></div>
            )
        }
    }

    function weightAlert() {
        return (
            <Alert status="error" mb={3}>
                <AlertIcon />
                <AlertTitle mr={2}></AlertTitle>
                <AlertDescription>Invalid Value</AlertDescription>
                <CloseButton position="absolute" onClick={() => setWeightAlertValue(false)} right="6px" top="8px"/>
            </Alert>
        )
    }

    
    const HandleHeightAlert = () => {
        if (heightAlertValue) {
            return heightAlert();
        }
        else {
            return (
                <div></div>
            )
        }
    }

    function heightAlert() {
        return (
            <Alert status="error" mb={3}>
                <AlertIcon />
                <AlertTitle mr={2}></AlertTitle>
                <AlertDescription>Invalid Value</AlertDescription>
                <CloseButton position="absolute" onClick={() => setHeightAlertValue(false)} right="6px" top="8px"/>
            </Alert>
        )
    }
    

    function stats() {
        return (
            <Flex ml={4} mt={4} mr={4} backgroundColor="gray.700" width="100%" alignItems="center" justifyContent="center">
                <Flex p={12} direction="column" background="gray.100" rounded={6} >
                    <Heading mb={6}>User Details PHI</Heading> 
                    <HandleAgeAlert/>
                    <Input type="number" value={age} onChange={handleAge} placeholder="Age (years)" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <HandleWeightAlert/>
                    <Input type="number" value={weight} onChange={handleWeight} placeholder="Weight (lbs)" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <HandleHeightAlert/>
                    <Input type="number" value={height} onChange={handleHeight} placeholder="Height (ft)" variant="" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                    <Button onClick={handleSubmit} mb={6} size="md" colorScheme="red">Submit</Button>
                </Flex>
            </Flex>
        )
    }
    return (
        <ChakraProvider>
            <Flex width="100%" >
                <Navbar/>
                {stats()}
                <HandleConfetti/>
            </Flex>
        </ChakraProvider>
    )
}

export default Profile