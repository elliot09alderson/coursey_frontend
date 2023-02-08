import React from 'react'
import { Grid,Box, Heading, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, HStack, Button } from '@chakra-ui/react'

import cursor from '../../../assets/Images/cursor.png'
import Sidebar from "../Dashboard/Sidebar.jsx"
import { RiDeleteBin7Fill } from 'react-icons/ri'
const Users = () => {

  const users = [{
    _id:"dmksdsd",
    name:"pratik",
    role:"admin",
    email:"pratikverma9691@gmail.com",
    subscription:{
      status:'active'
    },
    
  }]


  const updateHandler=(userId)=>{
console.log(userId)
  }
  const deleteButtonHandler=(userId)=>{
    console.log(userId)
      }
  return (
    <Grid minH={'100vh'} css={{
      cursor:`url(${cursor}),default `
    }} templateColumns={['1fr', '5fr 1fr']}>
  <Box p={["0","16"]} overflowX="auto">
<Heading textTransform={'uppercase'} children={"All Users"} my={16} textAlign={['center','left']}/>
<TableContainer w={['100vw','full']}>
<Table variant={'simple'}
size={'lg'}

>
<TableCaption>
  All available users in the database
</TableCaption>
<Thead>
  <Tr>
    <Th>Id</Th>
    <Th>Name</Th>
    <Th>Email</Th>
    <Th>Role</Th>
    <Th>Subscription</Th>
    <Th isNumeric>Action</Th>
  </Tr>
</Thead>
<Tbody>
  {users.map((item,idx)=>(
    <Row key={item+idx} item={item} deleteButtonHandler={deleteButtonHandler} updateHandler={updateHandler}/>
  ))}
</Tbody>
</Table>
</TableContainer>
  </Box>
  
  <Sidebar/>
    
  
    </Grid>
  )
}

export default Users

function Row({item,updateHandler,deleteButtonHandler}){
return(
  <Tr>
    <Td>#{item._id}</Td>
    <Td>{item.name}</Td>
    <Td>{item.email}</Td>
    <Td>{item.role}</Td>
    <Td>{item.subscription.status==="active"?"Active":"Not Active"}</Td>
    <Td isNumeric>
      <HStack justifyContent={'flex-end'}>
        <Button variant={'outline'} onClick={()=>updateHandler(item._id)} color="purple.500">
Change Role
        </Button>
        <Button color={'purple.600'} onClick={()=>deleteButtonHandler(item._id)}>
          <RiDeleteBin7Fill/>
        </Button>
      </HStack>
    </Td>
  </Tr>
)
}