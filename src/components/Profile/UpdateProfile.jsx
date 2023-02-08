import React from 'react'
import { Button, Container, Heading, Input,  VStack } from '@chakra-ui/react'
import { useState } from 'react'
const UpdateProfile = () => {
  const [name,setName] = useState('')
  
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  return <Container py={16}  minH={'90vh'}>
  <form action="">
      <Heading children="Update Profile"
      my={16} 
      textAlign={['center','left']} textTransform={'uppercase'}/>
  
  <VStack spacing={8}>
  <Input required id="name" value={name} placeholder='Enter Name' type={'text'} focusBorderColor='yellow.500' onChange={e=>setName(e.target.value)}/>
  <Input requrired id="email" value={email} placeholder="Enter Email" type={'email'} focusBorderColor="yellow.500" onChange={e=>setEmail(e.target.value)}/> 
  <Input required id="password" value={password} placeholder='Enter Password' type={'password'} focusBorderColor='yellow.500' onChange={e=>setPassword(e.target.value)}/>
  <Button w={'full'} colorScheme={'yellow'} type={'submit'}>
  Update 
  </Button>
  </VStack>
  
  </form>
      </Container>
}

export default UpdateProfile