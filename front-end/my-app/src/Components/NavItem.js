import React, {useState} from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'


export default function NavItem({ icon, title, active, navSize, url}) {
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
                    href={url}
                    borderRadius={8}
                    textDecor="none"
                    _hover={{ textDecor: 'none', backgroundColor: "#F0F8FF"}}
                    w={navSize == "large" && "100%"}
                >
                
                    <MenuButton w="100%" outline="none" background="none" border="none" textDecoration="none">
                        <Flex>
                            <Icon as={icon} fontSize="40px" color={active ? "#1E90FF" : "gray.500"} />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}