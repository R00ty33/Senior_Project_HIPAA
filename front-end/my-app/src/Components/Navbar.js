import React, { useState } from 'react'
import {ChakraProvider, Flex, Text, Stack, IconButton, Divider, Avatar, Heading, Button, Center } from '@chakra-ui/react'
import { FiBriefcase, FiLogIn, FiHome, FiMenu, FiLogOut } from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {FaBriefcaseMedical, FaClinicMedical, FaFileMedical, FaShoppingCart} from 'react-icons/fa'
import NavItem from "./NavItem"
import { Squash as Hamburger } from 'hamburger-react'
import AuthProvider from './AuthProvider'
import TokenProvider from './TokenProvider'
import { Navigate } from 'react-router'
import LoginLogoutItem from './LoginLogoutItem'

function Navbar() {
    const [navSize, changeNavSize] = useState("large")
    const [isOpen, setOpen] = useState(true)
    const [isLoggedIn, setLoggedIn] = useState(AuthProvider.useAuth())
    const [user, setUser] = useState('')


    const getActiveSideBar = () => {
        if (window.location.pathname == "/Home" || window.location.pathname == '/') {
            return (
                <div>
                    <NavItem url="/Home" navSize={navSize} icon={FaClinicMedical} title="Home" active/>
                    <NavItem url="/Inventory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" />
                    <NavItem url="/HIPAA" navSize={navSize} icon={FaFileMedical} title="HIPAA" />
                    <NavItem url="/Cart" navSize={navSize} icon={FaShoppingCart} title="Cart" />
                </div>
            )
        }
        if (window.location.pathname == "/Inventory") {
            return (
                <div>
                    <NavItem url="/Home" navSize={navSize} icon={FaClinicMedical} title="Home" />
                    <NavItem url="/Inventory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" active/>
                    <NavItem url="/HIPAA" navSize={navSize} icon={FaFileMedical} title="HIPAA" />
                    <NavItem url="/Cart" navSize={navSize} icon={FaShoppingCart} title="Cart" />
                </div>
            )
        }
        if (window.location.pathname == "/HIPAA") {
            return (
                <div>
                    <NavItem url="/Home" navSize={navSize} icon={FaClinicMedical} title="Home" />
                    <NavItem url="/Inventory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" />
                    <NavItem url="/HIPAA" navSize={navSize} icon={FaFileMedical} title="HIPAA" active/>
                    <NavItem url="/Cart" navSize={navSize} icon={FaShoppingCart} title="Cart" />
                </div>
            )
        }
        if (window.location.pathname == "/Cart") {
            return (
                <div>
                    <NavItem url="/Home" navSize={navSize} icon={FaClinicMedical} title="Home" />
                    <NavItem url="/Inventory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" />
                    <NavItem url="/HIPAA" navSize={navSize} icon={FaFileMedical} title="HIPAA" active/>
                    <NavItem url="/Cart" navSize={navSize} icon={FaShoppingCart} title="Cart" />
                </div>
            )
        }
        if (window.location.pathname == "/Profile") {
            return (
                <div>
                    <NavItem url="/Home" navSize={navSize} icon={FaClinicMedical} title="Home" />
                    <NavItem url="/Inventory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" />
                    <NavItem url="/HIPAA" navSize={navSize} icon={FaFileMedical} title="HIPAA" active/>
                    <NavItem url="/Cart" navSize={navSize} icon={FaShoppingCart} title="Cart" />
                </div>
            )
        }
    }

    const getUser = () => {
    }

    return (
        <ChakraProvider>
        <Flex pos="sticky" position="sticky" overflow-y="auto" max-height="500px" top="0" left="5" h="95vh" marginTop="2.5vh" boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)" borderRadius={navSize == "small" ? "15px" : "30px"} w={navSize == "small" ? "75px" : "200px"} flexDir="column" justifyContent="space-between">
            <Flex p="5%" flexDir="column" w="100%" alignItems={navSize == "small" ? "center" : "flex-start"} as="nav">
                <IconButton outline="none" border="none" textDecoration="none" background="none" mt={5} _hover={{ background: 'none' }} icon={<Hamburger size={30} toggled={isOpen} toggle={setOpen} />} 
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                {getActiveSideBar()}
                <Flex p="2%" flexDir="column" w="100%" alignItems={navSize == "small" ? "center" : "flex-start"} mb={4}>
                    <Divider display={navSize == "small" ? "none" : "flex"} />
                    <Flex mt={4} align="center" pos="absolute" bottom="20" mb={4}>
                        <Heading as="h3" size="sm">
                                <NavItem url={isLoggedIn ? "/Profile" : ""} navSize={navSize} icon={CgProfile} title={isLoggedIn ? TokenProvider.getUserName() : "Guest"}/>
                        </Heading>
                    </Flex>
                    <Flex mt={4} align="center" pos="absolute" bottom="0">
                        <Flex flexDir="column">
                            <Heading as="h3" size="sm">
                                <LoginLogoutItem navSize={navSize} icon={isLoggedIn ? FiLogOut : FiLogIn} title={isLoggedIn ? "Logout" : "Login"}/>
                            </Heading>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        </ChakraProvider>
    )
}

export default Navbar
