import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'


const ChangePassword = () => {
    const [oldPassword,setOldPassword] = useState('')
    const [newPassword,setNewPassword] = useState('')
  return <Container py={16}  minH={'90vh'}>
<form action="">
    <Heading children="Change Password"
    my={16} 
    textAlign={['center','left']} textTransform={'uppercase'}/>

<VStack spacing={8}>
<Input required id="password" value={oldPassword} placeholder='Enter Password' type={'password'} focusBorderColor='yellow.500' onChange={e=>setOldPassword(e.target.value)}/>
<Input required id="password" value={newPassword} placeholder='Enter Password' type={'password'} focusBorderColor='yellow.500' onChange={e=>setNewPassword(e.target.value)}/>
<Button w={'full'} colorScheme={'yellow'} type={'submit'}>
Update 
</Button>
</VStack>

</form>
    </Container>
}

export default ChangePassword