

import {  Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import {  RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentsFail = () => {
  return (
  
    <Container h='86.5vh' p='16'>
        <VStack justifyContent={"center"} h={'full'} spacing={'4'} >
<RiErrorWarningFill size={'5rem'}/>
        <Heading textTransform={'uppercase'}  children={'Payment Failed !'} />
       
            
            <Link to="/subscribe" >
                <Button variant={'ghost'}>Try Again</Button>
    
            </Link>
       
          
        </VStack>
    </Container>
      )
    }
    
    
    
  
  export default PaymentsFail
