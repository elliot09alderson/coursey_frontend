import { Container, VStack,Box,FormLabel,Input,Button,Heading } from '@chakra-ui/react'
// import { Link } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [ message ,setMessage]=useState('')
  return (
    <Container h={'90vh'}>
        <VStack height={'full'} justifyContent={['center']} spacing={'16'}>
            <Heading children="Contact us"/>
            <form style={{width:'100%'}}>
            <Box my={"4"}>
   <FormLabel htmlFor='name' children={"Name"}/>
    <Input required id="name" value={name} onChange={e=>setEmail(e.target.value)} plalceholder="adc@gmail.com"
     type="text" focusBorderColor="yellow.500"></Input>
   </Box>
 
            <Box my={"4"}>
   <FormLabel htmlFor='email' children={"Email Address"}/>
    <Input required id="email" value={email} onChange={e=>setEmail(e.target.value)} plalceholder="adc@gmail.com"
     type="email" focusBorderColor="yellow.500"></Input>
   </Box>
   <Box my={"4"}>
   <FormLabel htmlFor='message' children={"message"}/>
    <Input required id="message" value={message} onChange={e=>setMessage(e.target.value)} plalceholder="Enter message here"
     type="text" focusBorderColor="yellow.500"></Input>
   </Box>
 
   <Button my={'4'} colorScheme="yellow" type='submit'>
Login
   </Button>
   <Box my={'4'}>
            Request for a course !{' '}
            <Link to={'/request'}>
              <Button colorScheme={'yellow'} variant={'link'}>
                Click
              </Button>{' '}
          Here
            </Link>
          </Box>

            </form>
        </VStack>

    </Container>
  )
}

export default Contact