import React from 'react'
import { Heading,Container,VStack, Input, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
const ResetPassword = () => {
    const [password,setPassword] = useState('')
  const params = useParams();
  console.log(params.token)
  return (
   <Container py={'16'} h={"86.5vh"}>
    <form action="
    ">
        <Heading children="Reset Password" my={'16'} textTransform={'uppercase'} textAlign={['center','left']}  />
        <VStack spacing={'8'}>

        <Input required id="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="abc@gmail.com" type={'password'} focusBorderColor="yellow.500"/>
        <Button type='submit' w={"full"} colorScheme="yellow" onClick={ResetPassword} >
         Reset Password
        </Button>
        </VStack>

    </form>
   </Container>
  )
}

export default ResetPassword