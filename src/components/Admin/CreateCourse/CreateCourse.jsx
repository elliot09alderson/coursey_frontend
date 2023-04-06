import React from 'react'
import { Grid,Image, Container, Heading, VStack, Input, Select, Button } from '@chakra-ui/react'

import cursor from '../../../assets/Images/cursor.png'
import Sidebar from "../Dashboard/Sidebar.jsx"
import { fileUploadCss } from '../../Auth/Register/Register'
import { useState } from 'react'
const CreateCourse = () => {
  const Categories = [
    "Web Development", "Artificial Intelligence","Data Structure& Algorithm" , "Data Science",
    "Machine Learning","Graphic Designing"
  ]
  const [title,setTitle]= useState('')
  const [description,setDescription]= useState('')
  const [createdBy,setCreatedBy]= useState('')
  const [category,setCategory]= useState('')
  const [image,setImage]= useState('')
  const [imagePrev,setImagePrev]= useState('')
  const changeFileHandler = (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
      setImagePrev(reader.result);
      setImage(file)
    }
    }
  return (
    <Grid minH={'100vh'} css={{
      cursor:`url(${cursor}),default `
    }} templateColumns={['1fr', '5fr 1fr']}>

<Container py='16' >
  <form action="">

<Heading textTransform={'uppercase'} children={"Create Course"} my={16} textAlign={['center','left']}/>
<VStack margin={'auto'} spacing={8} >
<Input value={title} onChange={e=>setTitle(e.target.value)} placeholder={'Title'} focusBorderColor={'purpule.300'} type='text'/>
<Input value={description} onChange={e=>setDescription(e.target.value)} placeholder={'Description'} focusBorderColor={'purpule.300'} type='text'/>
<Input value={createdBy} onChange={e=>setCreatedBy(e.target.value)} placeholder={'Creator Name'} focusBorderColor={'purpule.300'} type='text'/>

  <Select >

{Categories.map((item,idx)=>(
  <option key={item+idx}>
    {item}
  </option>
))}
  </Select>

  <Input accept='image/*'
  required
  type="file"
  focusBorderColor='purple.300'
  onChange={changeFileHandler}
  css={{'&::file-selector-button':{
    ...fileUploadCss,
    color:"purple"
  }}}/>

  {imagePrev &&( <Image src={imagePrev} boxSize={64} objectFit={'contain'}/>)}
<Button w="full" colorScheme={'purple'} type={'submit'}>
Create
</Button>
</VStack>
  </form>   

</Container> 
  
  <Sidebar/>

  
    </Grid>
  )
}

export default CreateCourse