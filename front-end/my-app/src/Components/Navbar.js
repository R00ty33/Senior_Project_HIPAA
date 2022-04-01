import React, { useState } from 'react'
import {ChakraProvider, Flex, Text, Stack, IconButton, Divider, Avatar, Heading, Button, Center } from '@chakra-ui/react'
import { FiBriefcase, FiLogIn, FiHome, FiMenu, FiLogOut } from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {FaBriefcaseMedical, FaClinicMedical, FaFileMedical, FaShoppingCart} from 'react-icons/fa'
import {GrUserAdmin} from 'react-icons/gr'
import {GoRocket} from 'react-icons/go'
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
    let cartCount = localStorage.getItem('cartCount');

    function GetCart() {
        if (cartCount > 0) {
            return (
                <NavItem url="/Cart" navSize={navSize} icon={FaShoppingCart} title={"Items: " + cartCount} />
            )
        }
        else {
            return (
                <NavItem url="/Cart" navSize={navSize} icon={FaShoppingCart} title="Cart" />
            )
        }
    }

    const getActiveSideBar = () => {
        if (window.location.pathname == "/Home" || window.location.pathname == '/') {
            return (
                <div>
                    <NavItem url="/Home" navSize={navSize} icon={FaClinicMedical} title="Home" active/>
                    <NavItem url="/Inventory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" />
                    <NavItem url="/Compliance" navSize={navSize} icon={FaFileMedical} title="Compliance" />
                    <GetCart/>
                </div>
            )
        }
        if (window.location.pathname == "/Inventory") {
            return (
                <div>
                    <NavItem url="/Home" navSize={navSize} icon={FaClinicMedical} title="Home" />
                    <NavItem url="/Inventory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" active/>
                    <NavItem url="/Compliance" navSize={navSize} icon={FaFileMedical} title="Compliance" />
                    <GetCart/>
                </div>
            )
        }
        if (window.location.pathname == "/Compliance") {
            return (
                <div>
                    <NavItem url="/Home" navSize={navSize} icon={FaClinicMedical} title="Home" />
                    <NavItem url="/Inventory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" />
                    <NavItem url="/Compliance" navSize={navSize} icon={FaFileMedical} title="Compliance" active/>
                    <GetCart/>
                </div>
            )
        }
        if (window.location.pathname == "/Cart") {
            return (
                <div>
                    <NavItem url="/Home" navSize={navSize} icon={FaClinicMedical} title="Home" />
                    <NavItem url="/Inventory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" />
                    <NavItem url="/Compliance" navSize={navSize} icon={FaFileMedical} title="Compliance" active/>
                    <GetCart/>
                </div>
            )
        }
        if (window.location.pathname == "/Profile") {
            return (
                <div>
                    <NavItem url="/Home" navSize={navSize} icon={FaClinicMedical} title="Home" />
                    <NavItem url="/Inventory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" />
                    <NavItem url="/Compliance" navSize={navSize} icon={FaFileMedical} title="Compliance" active/>
                    <GetCart/>                    
                </div>
            )
        }
        if (window.location.pathname == "/Checkout") {
            return (
                <div>
                    <NavItem url="/Home" navSize={navSize} icon={FaClinicMedical} title="Home" />
                    <NavItem url="/Inventory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" />
                    <NavItem url="/Compliance" navSize={navSize} icon={FaFileMedical} title="Compliance" active/>
                    <GetCart/>
                </div>
            )
        }
        if (window.location.pathname == "/Orders") {
            return (
                <div>
                    <NavItem url="/Home" navSize={navSize} icon={FaClinicMedical} title="Home" />
                    <NavItem url="/Inventory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" />
                    <NavItem url="/Compliance" navSize={navSize} icon={FaFileMedical} title="Compliance" active/>
                    <GetCart/>                    
                </div>
            )
        }
        if (window.location.pathname == "/Success") {
            return (
                <div>
                    <NavItem url="/Home" navSize={navSize} icon={FaClinicMedical} title="Home" />
                    <NavItem url="/Inventory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" />
                    <NavItem url="/Compliance" navSize={navSize} icon={FaFileMedical} title="Compliance" active/>
                    <GetCart/>
                </div>
            )
        }
        if (window.location.pathname == "/Admin") {
            return (
                <div>
                    <NavItem url="/Home" navSize={navSize} icon={FaClinicMedical} title="Home" />
                    <NavItem url="/Inventory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" />
                    <NavItem url="/Compliance" navSize={navSize} icon={FaFileMedical} title="Compliance" active/>
                    <GetCart/>
                </div>
            )
        }
    }

    const getUser = () => {
    }

    const getProfile = () => {
        if (isLoggedIn) {
            return (
                <>
                    <NavItem url={isLoggedIn ? "/Profile" : "/Profile"} navSize={navSize} icon={CgProfile} title={isLoggedIn ? TokenProvider.getUserName() : "Guest"}/>
                    <NavItem url={isLoggedIn ? "/Orders" : "/Orders"} navSize={navSize} icon={GoRocket} title={"Orders"}/>
                </>
            )
        }
    }

    const getAdminPanel = () => {
        console.log(TokenProvider.getRole())
        if (TokenProvider.getRole() == "[ROLE_ADMIN]" && isLoggedIn) {
            return (
                <NavItem url={isLoggedIn ? "/Admin" : "/Admin"} navSize={navSize} icon={GrUserAdmin} title="ADMIN"/>
            )
        }
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
                    {getProfile()}
                    {getAdminPanel()}
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
