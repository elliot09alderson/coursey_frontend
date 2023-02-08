import { Box, Container,Button, Heading,Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
   <Container h='90vh' p='16'>
<Heading children="Welcome" my="8" textAlign={'center'}/>
<VStack boxShadow={'lg'} spacing={'0'} borderRadius={'lg'} alignItems={'stretch'}>
<Box bg={'yellow.400'} p={'4'} css={{borderRadius:"8px 8px 0 0 "}}>
    <Text children={`Pro Pack - 299 rs. `} color={'black'}/>
</Box>
<Box p="4">
<VStack textAlign={'center'} px={'8'} mt={'4'} spacing="8">
    <Text children={'join our pro pack to get access to all premium contents.'} />
<Heading size={'md'} children={'Rs. 299 only'}/>
</VStack>
<Button my='8' w="full" colorScheme={'yellow'}>
Buy Now
</Button>
 
</Box>
<Box bg={'blackAlpha.600'} p={'4'} css={{borderRadius:"0 0 8px 8px "}}>
<Heading size={'sm'} color={'white'} children={'100% refund at cancellation'} textTransform={'uppercase'}/>
<Text fontSize={'xs'} color={'white'} children={'*Terms and Condition Applied'}/>
</Box>
</VStack>
   </Container>
  )
}

export default Subscribe