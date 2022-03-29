import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Flex, Divider, Icon, Heading, AspectRatio, Text, useColorMode, useColorModeValue, Button, Box, Container, Grid, GridItem, extendTheme, withDefaultColorScheme, MenuDivider, IconButton} from '@chakra-ui/react';
import Navbar from './Navbar.js'



function Compliance() {

    return (
        <ChakraProvider>
            <Flex width="100%">
                <Navbar/>
                <Flex ml={4} mt={4} mr={4} backgroundColor="gray.700" display="inline" width="100%" flexDirection="column" justifyContent="center" verticalAlign="top" textAlign="center">
                
                <Heading color="#1E90FF">Compliance</Heading>

                <Center height='1000px' p={105}>
                <Divider orientation='vertical' variant='solid' borderColor='blue.100' />
                </Center>

                <AspectRatio height='500px' maxW='760px' position="absolute" left="240px" right="0px" top="160px" ratio={2}>
                 <iframe
                 title='HIPAA'
                 src='https://youtube.com/embed/vPYCXjImG0Y'
                 allowFullScreen />
                </AspectRatio>

                <Flex position='absolute' left='775px' right='20px' top='80px' fontSize='40' fontWeight='thin' color='white'>
                    <text>Learn How We Protect Your Data</text>
                </Flex>

                <Flex textAlign='left' ml={165} mt={-380} mr={0} color='white' fontSize='20' fontWeight='semibold' textDecoration='underline'>
               <text> Protection and Confidential Handling of Health Information </text> 
                </Flex>

                <Flex textAlign='left' ml={10} mt={5} mr={0} color='white' fontSize='15' fontWeight='normal'>
                <text> The Health Insurance Portability and Accountability Act (HIPAA) requires health care providers and organizations, as well <br></br> 
                as their business associates, to develop and follow procedures that ensure the confidentiality and security of protected<br></br> 
                health information (PHI) when it is transferred, received, handled, or shared.  This applies to all forms of PHI, including <br></br> paper, oral, and electronic,
                etc.  Furthermore, only the minimum health information necessary to conduct business is<br></br> 
                to be used or shared. </text>
                </Flex>

                <Flex textAlign='left' ml={1150} mt={-170} mr={0} color='white' fontSize='20' fontWeight='semibold' textDecoration='underline'>
               <text> A Secure Payment ecosystem </text> 
                </Flex>
                
                <Flex textAlign='left' ml={870} mt={25} mr={0} color='white' fontSize='15' fontWeight='normal'>
               <text> PCI compliance is an industry-standard set to keep sensitive payment data safe. PCI DSS stands for the Payment Card <br></br>
                Industry Data Security Standard. It is a set of controls and obligations for companies of any size that handle credit card <br></br> 
                information, designed to reduce the likelihood of card data being compromised. To put it simply, PCI DSS directs how <br></br>
                organizations should securely manage credit card account numbers and payment card data to best protect the collection,<br></br> 
                storage, and transmission of cardholder data from e-commerce transactions.</text> 
                </Flex>
                

                <AspectRatio height='500px' maxW='760' position="absolute" left="1085px" right="0px" top="160px" ratio={2}>
                 <iframe
                 title='PCI DSS'
                 src='https://www.youtube.com/embed/szVmMxWORBc'
                 allowFullScreen />
                </AspectRatio>

                </Flex>
            </Flex>
        </ChakraProvider>
    )
}


export default Compliance