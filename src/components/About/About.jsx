import { Container, Heading, Stack, VStack,Text,Avatar, Link, Button, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import {RiSecurePaymentFill} from 'react-icons/ri'
import introVideo from '../../assets/Videos/intro.mp4'
import terms from '../../assets/Docs/termsAndCondition.js'
const VideoPlayer = ()=>{
    return (
    <Box>
        <video autoPlay={true} controls controlsList='nodownload nofullscreen noremoteplayback' 
    disablePictureInPicture disableRemotePlayback
     src={introVideo} muted>

    </video>
    </Box>
)}
const TandC = ({termsAndConditions})=>{
    return (
        <Box>
            <Heading children={'Terms and Conditions'} size={'md'} textAlign={["center","left"]} my={"4"}/>
            <Box h="sm" p="4" overflowY={'scroll'} overflowX={'none'}>
            <Text textAlign={['center','left']}  letterSpacing={'widest'} fontFamily={'heading'}>
                {termsAndConditions}
            </Text>
            <Heading my={'4'} size={'xs'} children={'Refund only app applicable for cancellation with in 7 days'}/>

            </Box>
        </Box>  
    )
}
const Founder=()=>{
    return (

        <Stack direction={['column','row']} spacing={['4','16']} padding={'8'}>
<VStack >
    <Avatar boxSize={['40','48']}/>
    <Text childern="Co-Founder" opacity={0.7}/>
</VStack>
<VStack justifyContent={"center"} alignItems={['center','flex-start']} >
<Heading children="Er. Pratik Verma" size={['md','xl']}/>
    <Text textAlign={["center","left"]} children={`Hi, I am a full Stack Dev And an Teaching Enthusiast Our mission is to provide Quality content at reasonable price`}/> 
</VStack>
    </Stack>
        )
}
const About = () => {
  return (
      <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
        <Heading children="About Us" textAlign={['center','left']}/>
          <Founder/>
<Stack m="8" direction={["column","row"]} alignItems="center">
    <Text fontFamily={'cursive'}  m="8" textAlign={["center","left"]}>
        we are Video Streaming platform with premium contents at very reasonable amount.
    </Text>
    <Link to={'/subscribe'}>
    <Button colorScheme={'yellow'} variant={"ghost"}>
        Checkout Our Plans

    </Button>
    </Link>
</Stack>
<VideoPlayer/>
<TandC termsAndConditions = {terms}/>
<HStack my={'4'} p={'4'}>
    <RiSecurePaymentFill/>
    <Heading children="payment is secured by Razorpay" size={'xs'} fontFamily={'sans-serif'} textTransform={'uppercase'}/>
</HStack>
    </Container>
  )
}

export default About