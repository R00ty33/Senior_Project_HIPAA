import React, { useState, useEffect } from 'react';
import Axios from 'axios'; // API 
import { ChakraProvider, Button, Flex, Heading, Input, useColorModeValue, Text, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import tokenProvider from './TokenProvider';
import CookieProvider from './CookieProvider';
const validator = require("email-validator");
const passwordValidator = require('password-validator');

function SignUpPage() {
    const history = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailTakenAlert, setEmailTakenAlert] = useState(false);
    const [emailInvalidAlert, setEmailInvalidAlert] = useState(false);
    const [passwordInvalidAlert, setPasswordInvalidAlert] = useState(false);
    const [validateFirstName, setValidateFirstName] = useState(false);
    const [validateLastName, setValidateLastName] = useState(false);

    const HandleFirstNameAlert = () => {
        if (validateFirstName) {
            return firstNameAlert();
        }
        else {
            return (
                <div></div>
            )
        }
    }

    function firstNameAlert() {
        return (
            <Alert status="error" mb={3}>
                <AlertIcon />
                <AlertTitle mr={2}></AlertTitle>
                <AlertDescription>Invalid Value</AlertDescription>
                <CloseButton position="absolute" onClick={() => setValidateFirstName(false)} right="6px" top="8px"/>
            </Alert>
        )
    }

    const HandleLastNameAlert = () => {
        if (validateLastName) {
            return lastNameAlert();
        }
        else {
            return (
                <div></div>
            )
        }
    }

    function lastNameAlert() {
        return (
            <Alert status="error" mb={3}>
                <AlertIcon />
                <AlertTitle mr={2}></AlertTitle>
                <AlertDescription>Invalid Value</AlertDescription>
                <CloseButton position="absolute" onClick={() => setValidateLastName(false)} right="6px" top="8px"/>
            </Alert>
        )
    }

    function register() {
        validateEmail(email);
        validatePassword(password);
        validateFirst_Name(firstName);
        validateLast_Name(lastName);
        if (validateEmail(email) && validateLast_Name(lastName) && validateFirst_Name(firstName)) {
            if (validatePassword(password)) {
                Axios.post('https://localhost:8843/api/SignUp', {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    withCredentials: true, 
                    crossorigin: true, 
                    origin: "https://localhost:3000"
                }).then((response) => {
                    console.log(response.status, response, response.data);
                    history(`/Login`);
                }).catch((err) => {
                    console.log("Promise Rejected", err.message, err.response.data);
                    setEmailTakenAlert(true);
                })
            }
        }
    }

    
    /** check if password is valid */
    const validatePassword = (password) => {
        var schema = new passwordValidator();
        schema.is().min(7).has().uppercase().has().lowercase().has().digits(1).has().not().spaces()
        if(!schema.validate(password)) {
            setPasswordInvalidAlert(true);
            return false;
        }
        setPasswordInvalidAlert(false);
        return true;
    }
    
    function validateFirst_Name(firstName) {
        var reWhiteSpace = new RegExp("\\s+");
        if ((firstName != '' && !reWhiteSpace.test(firstName))) {
            setValidateFirstName(false)
            return true;
        }
        setValidateFirstName(true)
        return false;
    }

    function validateLast_Name(lastName) {
        var reWhiteSpace = new RegExp("\\s+");
        if ((lastName != '' && !reWhiteSpace.test(lastName))) {
            setValidateLastName(false)
            return true;
        }
        setValidateLastName(true)
        return false;
    }

    /** check if email is valid */
    const validateEmail = (email) => {
        if (!validator.validate(email)) {
            setEmailInvalidAlert(true);
            return false;
        }
        setEmailInvalidAlert(false);
        return true;
    }

    const handleFirstName = e => { 
        setFirstName(e.target.value)
    }

    const handleLastName = e => {
        setLastName(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const HandleEmailTakenAlert = () => {
        if (emailTakenAlert) {
            return (
                <EmailTakenAlert/>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    const HandleEmailInvalidAlert = () => {
        if (emailInvalidAlert) {
            return (
                <EmailInvalidAlert/>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    const HandlePasswordInvalidAlert = () => {
        if (passwordInvalidAlert) {
            return (
                <PasswordInvalidAlert/>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    const EmailTakenAlert = () => {
          return (
            <Alert status="error" mb={3}>
              <AlertIcon />
              <AlertTitle mr={2}></AlertTitle>
              <AlertDescription>Email is Taken</AlertDescription>
              <CloseButton position="absolute" onClick={() => setEmailTakenAlert(false)} right="6px" top="8px"/>
            </Alert>
          )
    }

    const EmailInvalidAlert = () => {
        return (
          <Alert status="error" mb={3}>
            <AlertIcon />
            <AlertTitle mr={2}></AlertTitle>
            <AlertDescription>Email is Invalid</AlertDescription>
            <CloseButton position="absolute" onClick={() => setEmailInvalidAlert(false)} right="6px" top="8px"/>
          </Alert>
        )
  }

  const PasswordInvalidAlert = () => {
    return (
      <Alert status="error" mb={3}>
        <AlertIcon />
        <AlertTitle mr={2}></AlertTitle>
        <AlertDescription>Password weak</AlertDescription>
        <CloseButton position="absolute" onClick={() => setPasswordInvalidAlert(false)} right="6px" top="8px"/>
      </Alert>
    )
}

    return (
        <ChakraProvider>
        <Flex height="100vh" alignItems="center" justifyContent="center" background="gray.700" >
            <Flex direction="column" p={12} background="gray.100" rounded={6}>
                <Heading mb={6}>Sign up
                </Heading>
                <HandleFirstNameAlert/>
                <Input type="text" value={firstName} onChange={handleFirstName} placeholder="first name" variant="filled" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                <HandleLastNameAlert/>
                <Input type="text" value={lastName} onChange={handleLastName} placeholder="last name" variant="filled" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                <HandleEmailTakenAlert />
                <HandleEmailInvalidAlert />
                <Input type="text" value={email} onChange={handleEmail} placeholder="email" variant="filled" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                <HandlePasswordInvalidAlert/>
                <Input type="password" value={password} onChange={handlePassword} placeholder="*********" variant="filled" mb={3} isInvalid errorBorderColor="gray.400"></Input>
                <Button onClick={register} mb={6} colorScheme="teal">Register</Button>
                <Text>Already have an account?</Text>
                <Button onClick={() => history(`/Login`)} mb={6} size="md" colorScheme="red">Sign in</Button>
            </Flex>
        </Flex>
        </ChakraProvider>
    )
}

export default SignUpPage;