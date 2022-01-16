import React, { useState } from 'react'
import {Flex, Text, Stack, IconButton, Divider, Avatar, Heading, Button, Center } from '@chakra-ui/react'
import { FiBriefcase, FiLogIn, FiHome, FiMenu } from 'react-icons/fi'
import {FaBriefcaseMedical, FaClinicMedical, FaFileMedical} from 'react-icons/fa'
import NavItem from "./NavItem"
import { Squash as Hamburger } from 'hamburger-react'

function Navbar() {
    const [navSize, changeNavSize] = useState("large")

    const getActiveSideBar = () => {
        if (window.location.pathname == "/Home") {
            return (
                <div>
                    <NavItem url="/Dashboard" navSize={navSize} icon={FaClinicMedical} title="Dashboard" active/>
                    <NavItem url="/Invetory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" />
                    <NavItem url="/HIPAA" navSize={navSize} icon={FaFileMedical} title="HIPAA" />

                </div>
            )
        }
        if (window.location.pathname == "/Inventory") {
            return (
                <div>
                    <NavItem url="/Dashboard" navSize={navSize} icon={FaClinicMedical} title="Dashboard" />
                    <NavItem url="/Invetory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" active/>
                    <NavItem url="/HIPAA" navSize={navSize} icon={FaFileMedical} title="HIPAA" />
                    
                </div>
            )
        }
        if (window.location.pathname == "/HIPAA") {
            return (
                <div>
                    <NavItem url="/Dashboard" navSize={navSize} icon={FaClinicMedical} title="Dashboard" />
                    <NavItem url="/Invetory" navSize={navSize} icon={FaBriefcaseMedical} title="Inventory" />
                    <NavItem url="/HIPAA" navSize={navSize} icon={FaFileMedical} title="HIPAA" active/>

                </div>
            )
        }
    }

    return (
        <Flex pos="sticky" left="5" h="95vh" marginTop="2.5vh" boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)" borderRadius={navSize == "small" ? "15px" : "30px"} w={navSize == "small" ? "75px" : "200px"} flexDir="column" justifyContent="space-between">
            <Flex p="5%" flexDir="column" w="100%" alignItems={navSize == "small" ? "center" : "flex-start"} as="nav">
                <IconButton outline="none" border="none" textDecoration="none" background="none" mt={5} _hover={{ background: 'none' }} icon={<Hamburger size={30} />} 
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                {getActiveSideBar()}
                <Flex p="5%" flexDir="column" w="100%" alignItems={navSize == "small" ? "center" : "flex-start"} mb={4}>
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center" pos="absolute" bottom="0">
                    <Flex flexDir="column" ml={4}>
                        <Heading as="h3" size="sm">
                            <NavItem url="/Login" navSize={navSize} icon={FiLogIn} title="Login" />
                        </Heading>
                    </Flex>
                </Flex>
            </Flex>
            </Flex>
        </Flex>
    )
}

export default Navbar
