import React from 'react'
import './Home.css'

import { Heading,Image, Stack,Box, VStack,Text, Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {CgGoogle,CgYoutube} from "react-icons/cg"
import {SiCoursera,SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import introVideo from '../assets/Videos/intro.mp4'

import vg from "../assets/Images/bg.png"
const Home = () => {
  return (
    <section className='Home'>
        <div className='container'>
            <Stack direction={["column","row"]} 
            height="100%"
            justifyContent={["center","space-between"]}
            alignItems="center"
            spacing={['16', '18', '20', '56']} 
            >
                <VStack width={'full'} alignItems={["center","flex-end"]} spacing={'8'}>
                    <Heading children="Learn From Experts" size =  {'2xl'}/>
                    <Text fontSize={'2xl'} fontFamily={'cursive'} textAlign={["center","left"]} children="Find Valuable content at descent price"/>
                    <Link to="/courses">
                        <Button size={'lg'} colorScheme={'yellow'}>
                            Enroll now
                        </Button>
                    </Link>
                

                </VStack>
                <Image className='vector-graphics' boxSize = {'md'} src={vg}
                 objectFit="contain "/>

            </Stack>
        </div>

        <Box padding={"8"} bg="blackAlpha.800">
            <Heading children=" OUR BRNDS" textAlign={"center"}
             fontFamily="body" color="yellow.400 "/> 
        <HStack className='brandsBanner' justifyContent={"space-evenly"} marginTop={'5'} >
        <CgGoogle/>
            <CgYoutube/>
            <SiCoursera/>   
            <SiUdemy/>
            <DiAws/>
        </HStack>
        </Box>
<div className="container2">
    <video autoPlay={true} controls controlsList='nodownload nofullscreen noremoteplayback' 
    disablePictureInPicture disableRemotePlayback
     src={introVideo}>

    </video>
</div>

    </section>
  )
}

export default Home