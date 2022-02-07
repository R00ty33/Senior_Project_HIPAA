import React, { useState, useEffect } from 'react';
import Axios from 'axios'; // API 
import { ChakraProvider, Button, Flex, Heading, Input, useColorModeValue, Text, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import tokenProvider from './TokenProvider'
import authProvider from './AuthProvider'

function LoginPage() {
    const formBackground = useColorModeValue("gray.700") /** Light Mode = gray.100,     Dark Mode = gray.700 */  
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [incorrectPasswordAlert, setIncorrectPasswordAlert] = useState(false);

    useEffect(() => {
        handleLogged();
    }, [])
    
    /** If logged in, go to Dashboard */
    function handleLogged() {
        if (authProvider.useAuth()) {
            history('/Home');
        }
    }


    function LoginAuthentication() {
        const params = new URLSearchParams();
        params.append('email', email);
        params.append('password', password);

        Axios.post('http://localhost:8080/api/login', params, {withCredentials: true, crossorigin: true, origin: "http://localhost:3000"}).then((response) => {
            console.log(response.status, response, response.data);
            if (response.data.message === 'Unauthorized') {
                setIncorrectPasswordAlert(true);
            }
            else {
                //let access_token = response.data.access_token;
                //let refresh_token = response.data.refresh_token;
                //tokenProvider.setTokens(access_token, refresh_token);
                //console.log(tokenProvider.getAccessToken());
                //console.log("Logged in: " + tokenProvider.isLoggedIn())
                return history('/Home');
            }
        }).catch((err) => {
            console.log("Promise Rejected", err.message, err.response.data);
            if (err.response.data.message === 'Unauthorized') {
                setIncorrectPasswordAlert(true);
            }
        })
    }

    const HandleIncorrectPasswordAlert = () => {
        if (incorrectPasswordAlert) {
            return (
                <IncorrectPasswordAlert/>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    const IncorrectPasswordAlert = () => {
          return (
            <Alert status="error" mb={6}>
              <AlertIcon />
              <AlertTitle mr={-1}></AlertTitle>
              <AlertDescription maxWidth="sm">Wrong Email/Password</AlertDescription>
              <CloseButton position="absolute" onClick={() => setIncorrectPasswordAlert(false)} right="-2px" top="8px"/>
            </Alert>
          )
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }


    return (
        <ChakraProvider>
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" p={12} background="#2D3748" rounded={6}>
                <Heading mb={6}>Log in
                </Heading>
                <Input type="text" onChange={handleEmail} placeholder="email" variant="filled" mb={3}></Input>
                <Input type="password" onChange={handlePassword} placeholder="*********" variant="filled" mb={6}></Input>
                <HandleIncorrectPasswordAlert/>
                <Button onClick={LoginAuthentication} mb={3} colorScheme="teal">Log in</Button>
                <Text>Dont have an account? Sign up!</Text>
                <Button onClick={() => history(`/SignUp`)} mb={6} colorScheme="red">Sign up</Button>
            </Flex>
        </Flex>
        </ChakraProvider>
    )
}

export default LoginPage