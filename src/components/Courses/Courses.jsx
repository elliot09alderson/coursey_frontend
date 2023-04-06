import { Container,Heading, Input, Stack,HStack,Button,Text } from '@chakra-ui/react'
import Course from './Course'
import React from 'react'
import { useState } from 'react'
import image from '../../assets/Images/ROG.jpg'

const Courses = () => {
    const [keyword,setKeyword]= useState("")
    const [category,setCategory]= useState("")
    const addToPlayListHandler=(id)=>{  
console.log(id)
    }
    const Categories = [
        "Web Development", "Artificial Intelligence","Data Structure& Algorithm" , "Data Science",
        "Machine Learning","Graphic Designing"
    ]
  return (
    <Container minH={"95vh"} maxW="container.lg" paddingY={'8'}>
        <Heading children="All Courses" m={'8'}/>
<Input value={keyword} onChange={(e)=>setKeyword(e.target.value)} placeholder="Search a course ...." type={"text"}
focusBorderColor="yellow.500"/>
<HStack overflowX={"auto"} paddingY="8" css={{"&::-webkit-scrollbar":{display:"none "}}}>
   {Categories.map((item,index)=>(
     <Button key={index} onClick={()=>setCategory(item)} minW={"60"}>
     <Text children={item}/>
 </Button>
   ))}
</HStack>

<Stack direction={["column","row"]} 
flexWrap={"wrap"}
justifyContent={['flex-start','space-evenly']}
alignItems={["center","flex-start"]}
>
<Course title={"Sample"}
id={'xyz'}
description={"xyz"}
views={23}
imageSrc={image}
creator={"sammple"}
addToPlayListHandler={addToPlayListHandler}
lecture={2}

/>

</Stack>
    </Container>
  )
}

export default Courses