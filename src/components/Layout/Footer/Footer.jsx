import React from 'react'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular} from 'react-icons/ti'
import { DiGithub } from 'react-icons/di'
import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
const Footer = () => {
  return (
    <Box padding={"4"} bg="blackAlpha.900" minHeight={'10vh'}>
        <Stack direction={["column","row"]}>
            <VStack alignItems={["center","flex-start"]} width="full">
                <Heading children="All Rights Reserved" color={'white'}/>
                <Heading children ="@Er.pratik-Verma" color={'yellow.400'} fontFamily={'body'} size={'sm'}/>
            </VStack>
<HStack spacing={["2","10"]} color="white" fontSize={'50px'} justifyContent="center">
    <a href="#" target={'_blank'}>
            <TiSocialYoutubeCircular/>
    </a>
    <a href="#" target={'_blank'}>
            <TiSocialInstagramCircular/>
    
    </a>
    <a href="#" target={'_blank'}>
            <DiGithub/>
    
    </a>


</HStack>
        </Stack>

    </Box>
  )
}

export default Footer