import React, { useState, useEffect } from 'react';
import { Center, Flex, Heading, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme} from '@chakra-ui/react';
import Navbar from './Navbar.js'
function Home() {

    return (
        <Flex width="100%">
            <Navbar/>
            <Heading display="center" align="center" textAlign="center">Hungry Hungry HIPAAS</Heading>
        </Flex>
    )
}

export default Home