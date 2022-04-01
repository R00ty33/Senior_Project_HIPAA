import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Alert, Image, AlertIcon, AlertTitle, AlertDescription, SimpleGrid, Flex, Heading, Text, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
import {MdRemoveShoppingCart} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import cookieProvider from './CookieProvider'
import AuthProvider from './AuthProvider.js';
import axios from 'axios';

function Cart() {
    const [items, setItems] = useState('')
    const history = useNavigate();
    const [subTotal, setSubTotal] = useState('')
    const [isLoggedIn, setLoggedIn] = useState(AuthProvider.useAuth())
    const [alertValue, setAlertValue] = useState(false);
    const [reload, setReload] = useState(0);

    useEffect(() => {
        cookieProvider.checkForEcommerceCookie().then(() => {
            let cartCookie = cookieProvider.getCookie("ecommerceCookie")
            axios.post('https://localhost:8843/api/cart/getCart?cart_cookie='+ cartCookie, {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"})
            .then((response) => {
                setItems(organizeItems(response.data))
            }).catch((error) => {
                console.log(error.message)
            })
        })
    }, []); // [] = mount & unmount

    function PHIAlert() {
        if (alertValue) {
            if (isLoggedIn)  {
                return (
                    <>
                    <Alert status="error" mt={6} mb={3} width="30%" ml="auto" mr="auto">
                        <AlertIcon />
                        <AlertTitle mr={-1}></AlertTitle>
                        <AlertDescription maxWidth="sm">Must enter PHI information in Profile Page before continuing...<br></br>
                        <Button mt={6} onClick={() => history("/Profile")}>Redirect to /Profile</Button>
                        </AlertDescription>
                    </Alert>
                    </>
                )
            }
            else {
                return (                    
                    <Alert status="error" mt={6} mb={3} width="20%" ml="auto" mr="auto" textAlign="center" alignItems="center">
                        <AlertIcon />
                        <AlertTitle mr={-1}></AlertTitle>
                        <AlertDescription maxWidth="sm">Must login before continuing...<br></br>
                        <Button mt={6} onClick={() => history("/Login")} >Redirect to /Login</Button>
                        </AlertDescription>
                    </Alert>
                )
            }
        } else {
            return (
                <>
                </>
            )
        }
    }

    function GetCart() {
        cookieProvider.checkForEcommerceCookie().then(() => {
            let cartCookie = cookieProvider.getCookie("ecommerceCookie")
            axios.post('https://localhost:8843/api/cart/getCart?cart_cookie='+ cartCookie, {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"})
            .then((response) => {
                setItems(organizeItems(response.data))
            }).catch((error) => {
                console.log(error.message)
            })
        })
        setReload(p => p+1);
    }

    function handleSubmit() {
        if (isLoggedIn) {
            axios.get('https://localhost:8843/Profile/Exists?jwt=' + cookieProvider.getCookie("JWTCookie"), {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"}
            ).then((response) => {
                if (response.data == true) {
                    history("/Checkout");
                } else {
                    setAlertValue(true)
                }
            }).catch((err) => {
                console.log("Promise Rejected", err.message, err.response.data);
            })
        }
        else {
            setAlertValue(true)
        }
    }

    function organizeItems(data) {
        let formattedData = [];
        let total = 0;
        if (data.length == 0) setSubTotal(0);
        for (let i=0; i<data.length; i++) {
            if (localStorage.getItem('cartCount') == 0) {
                localStorage.setItem('cartCount', parseInt(localStorage.getItem('cartCount'))+ data.length);
            }
            let category = data[i].category
            let price = data[i].price
            let image = data[i].product_image
            let name = data[i].product_name
            let description = data[i].product_description
            setSubTotal((total += price).toFixed(2))
            formattedData.push(
                    <Box w='100%' p={0} ml={0} mt={0} borderWidth='1px' borderRadius='45px' mr={0} backgroundColor="gray.100">
                        <Heading mt={2} as='h4' size='md'>{name}</Heading>
                        <Image boxSize='150px' src={image} ml={8} mt={0} mb={6} borderRadius='15px' float="left"/>
                        <Box mt={8} textAlign="left" ml={60}>
                            <Heading as='h6' size='sm'>{category}</Heading>
                            <Box 
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            isTruncated
                            >
                                <Text fontSize='lg'>{price}</Text>
                            </Box><Text fontSize='sm' w="75%">{description}</Text>
                            <Button id={name} leftIcon={<MdRemoveShoppingCart/>} colorScheme='blue' size='xs' onClick={() => removeFromCart(name)}>Delete </Button>
                        </Box>
                    </Box>)
        }
        return (
            <SimpleGrid columns={1} spacing={2}>
                {formattedData}
            </SimpleGrid>
        )
    }

    function removeFromCart(item) {
        const params = new URLSearchParams();
        params.append('product_name', item);
        params.append('cart_cookie', cookieProvider.getCookie("ecommerceCookie"));
        axios.post('https://localhost:8843/api/cart/deleteItem', params, {withCredentials: true, crossorigin: true, origin: "https://localhost:3000"}).then((response) => {
            if (!localStorage.getItem('cartCount')) {
                localStorage.setItem('cartCount', 0);
            } else {
                if (!parseInt(localStorage.getItem('cartCount')) == 0) 
                   localStorage.setItem('cartCount', parseInt(localStorage.getItem('cartCount')) -1);
            }
            GetCart();
        }).catch((error) => {
                console.log(error.message);
        })
    }

    return (
        <ChakraProvider>
            <Flex width="100%">
                <Navbar/>
                <Flex ml={4} mt={4} mr={4} backgroundColor="gray.700" width="100%" flexDirection="column" verticalAlign="top" textAlign="center">
                <SimpleGrid columns={1} spacing={8}>
                    <Box p={8} ml={4} mr={4} mt={4} borderWidth='1px' borderRadius='45px' mr={4} backgroundColor="gray.400">
                        <Heading as='h4' size='md'>Cart</Heading>
                        <Flex height="auto" mt={6} ml={10}>
                            {items}               
                        </Flex>
                    </Box>
                </SimpleGrid>
                    <Heading as="h1" size="lg" color="white" mt={4}>Total: USD ${subTotal}</Heading>
                    <PHIAlert/>
                    <Button ml="auto" mr="auto" width="20%" direction="column" textAlign="center" onClick={handleSubmit} rounded={6} mb={6} colorScheme="red">Checkout</Button>
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}

export default Cart