import {
  Container,
  Input,
  FormLabel,
  Heading,
  VStack,
  Box,
  Button,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export const fileUploadCss = {
  cursor:'pointer',
  marginLeft:'-5%',
  width:'110%',
  border:'none',
  height:'100%',
  color:'#ECC94B',
  backgroundColor:'white', 

}
const fileUploadStyle ={'&::file-selector-button':fileUploadCss,};
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');
const changeFileHandler = (e)=>{
const file = e.target.files[0];
const reader = new FileReader()
reader.readAsDataURL(file);
reader.onloadend=()=>{
  setImagePrev(reader.result);
  setImage  (file)
}
}     
  return (
    <Container h={'110vh'}>
      <VStack h="full" justifyContent={'center'} spacing={'16'}>
        <Heading children={'Registration'} textTransform={'uppercase'}/>
        <form style={{ width: '100%' }}>
        <Box my={'4'} display={'flex'} justifyContent={'center'}>
            <Avatar src={imagePrev} size={'2xl'}/>
           
          </Box> 
          <Box my={'4'}>
            <FormLabel htmlFor="name" children={'Name'} />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              plalceholder="Enter Name"
              type="text"
              focusBorderColor="yellow.500"
            ></Input>
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children={'Email Address'} />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}  
              plalceholder="adc@gmail.com"
              type="email"
              focusBorderColor="yellow.500"
            ></Input>
          </Box>        
          <Box my={'4'}>
            <FormLabel htmlFor="password" children={'Password'} />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              plalceholder="Enter Password"
              type="email"
              focusBorderColor="yellow.500"
            ></Input>
          </Box>
          <Box>
            <FormLabel htmlFor='chooseAvatar' children="choose Avatar"/>
            <Input accept='image/*'
            required
            id='chooseAvatar'
            type={'file'}
            onChange={changeFileHandler}
            css={fileUploadStyle} 
            focusBorderColor = 'yellow.500'
            />
          </Box>
           
          <Button my={'4'} colorScheme="yellow" type="submit">
            Sign Up
          </Button>
          <Box my={'4'}>
            Already Signed Up ?{' '}
            <Link to={'/login'}>
              <Button colorScheme={'yellow'} variant={'link'}>
                Login
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
