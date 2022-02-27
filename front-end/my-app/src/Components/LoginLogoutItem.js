import React, {useState} from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList,
    Button
} from '@chakra-ui/react'
import AuthProvider from './AuthProvider.js';
import { useNavigate } from 'react-router-dom';


export default function LoginLogoutItem({ icon, title, navSize,}) {
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(AuthProvider.useAuth())


    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                   p={5}
                   borderRadius={15}
                   textDecor="none"
                   textDecoration="none"
                   _hover={{ textDecor: 'none', backgroundColor: isLoggedIn ? "#F08080" : "#90EE90"}}
                    onClick={() => {if (isLoggedIn) {AuthProvider.logout(); navigate('/Login');} else navigate('/Login')}}
                >
                    <Button w="100%" outline="none" background="none" border="none" textDecoration="none" variant="ghost" _hover={{ textDecor: 'none', backgroundColor: isLoggedIn ? "#F08080" : "#90EE90"}}>
                        <Flex>
                            <Icon as={icon} fontSize="x1" color={"gray.500"} />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </Button>
                </Link>
            </Menu>
        </Flex>
    )
}
