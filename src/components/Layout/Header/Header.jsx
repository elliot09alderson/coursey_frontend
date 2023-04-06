import React from 'react'
import {ColorModeSwitcher} from '../../../ColorModeSwitcher'
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri"
import { Drawer, DrawerBody, DrawerContent,Image, DrawerHeader,Button, DrawerOverlay, useDisclosure, VStack, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import LOGO from './LOGO'
import { useSelector } from 'react-redux'
const Header = ({isAuthenticated=false,user}) => {

    const {isOpen,onOpen, onClose}= useDisclosure();

 function logOutHandler(){
    console.log("logout...")
    onClose()
 }
  return (
    <>
  <ColorModeSwitcher/>
  <Button 
  onClick= {onOpen}
  colorScheme={'yellow'}
  width="12"
  height ={'12'}
  rounded = 'full'
  zIndex={'overlay'}
  position={'fixed'}
  top="6"
  left="6"
  >
<RiMenu5Fill/>
  </Button>

  <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
<DrawerOverlay backdropFilter={"blur(3px)"}/>
<DrawerContent>
    <DrawerHeader>
    <LOGO/>

  Coursey
    
 

    </DrawerHeader>

    <DrawerBody>
    <VStack spacing={'8'} alignItems="flex-start">
      <LinkButton url="/"  onClose={onClose} title="Home"/> 
      <LinkButton url="/courses"  onClose={onClose} title="Browse All Courses"/> 
      <LinkButton url="/request"  onClose={onClose} title="Request a Course"/> 
      <LinkButton url="/contact"  onClose={onClose} title="Contact Us"/> 
      <LinkButton url="/about"  onClose={onClose} title="About"/> 
      {/* <LinkButton url="/" title="Home"/>  */}


      <HStack justifyContent={"space-evenly"} position="absolute" bottom={"2rem"} width="80%">
        {isAuthenticated?(<>
        <VStack>
            <HStack>
                <Link to="profile">
                    <Button variant={"ghost"} colorScheme={'yellow'} onClick={onClose}>
Profile
                    </Button>
                </Link>
                <Button variant={"ghost"} onClick={logOutHandler}>
                    <RiLogoutBoxLine/>
Logout
                    </Button>
            </HStack>

            {
                user && user.role ==="admin" && <Link to="/admin/dashboard ">
                    <Button colorScheme={'purple'} onClick={onClose} variant={'ghost'}><RiDashboardFill style={{margin:"4px"}}/>
                        DashBoard
                    </Button>
                </Link>
            }
        </VStack>
        </>):(<>
        <Link to={'/login'}>
            <Button colorScheme={"yellow"} onClick={onClose}>
                Login
            </Button>
        </Link>
        <p>OR</p>
        <Link to={'/signup'}>
            <Button colorScheme={"yellow"} >
                SignUp
            </Button>
        </Link>
        </>)}

      </HStack>
    </VStack>
    </DrawerBody>
</DrawerContent>
  </Drawer>
    </>
  )
}

export default Header


const LinkButton = ({url="/",title="Home" ,onClose})=>(
    <Link to={url}>
    <Button variant={"ghost"} onClick={onClose} >
        {title}
    </Button>
</Link>
)