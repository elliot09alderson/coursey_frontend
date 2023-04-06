import { Container,Input, FormLabel, Heading, VStack, Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../../redux/actions/userAction'
import { useDispatch } from 'react-redux'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const dispatch = useDispatch()

    const submitHandler = (e)=>{
e.preventDefault();
dispatch(login(email,password))
    };

  return (
   <Container h={"95vh"}>

    <VStack h="full" justifyContent={"center"} spacing={'16'}>
        <Heading children="Welcome to CourseBundler"/>
<form action="" onSubmit={submitHandler} style={{width:'100%'}}>
   <Box my={"4"}>
   <FormLabel htmlFor='email' children={"Email Address"}/>
    <Input required id="email" value={email} onChange={e=>setEmail(e.target.value)} plalceholder="adc@gmail.com"
     type="email" focusBorderColor="yellow.500"></Input>
   </Box>
   <Box my={"4"}>
   <FormLabel htmlFor='password' children={"Password"}/>
    <Input required id="password" value={password} onChange={e=>setPassword(e.target.value)} plalceholder="Enter Password"
     type="email" focusBorderColor="yellow.500"></Input>
   </Box>
   <Box>
<Link to="/forgotpassword">
    <Button fontSize={'sm'} mx={-4} variant={"Link"} opacity={'0.7'}>Forget Password ?</Button>
</Link>
   </Box>
   <Button my={'4'} colorScheme="yellow" type='submit'>
Login
   </Button>
   <Box my={'4'}>
New User ? <Link to={"/signup"}>
    <Button colorScheme={'yellow'} variant={'link'}>
        Sign Up
    </Button>{" "}
    here
</Link>
   </Box>
</form>
    
    </VStack>
   </Container>
  )
}

export default Login