import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiDashboardFill,RiUser3Fill,RiEyeFill, RiAddCircleFill } from 'react-icons/ri'
import {  Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const location = useLocation()  ;
  return (
  <VStack spacing={'8'} p='16' boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}>
    <DashboardButton url={'/dashboard'} active={location.pathname==='/admin/dashboard'} Icon={RiDashboardFill} text={'Dashboard'}/>
            <DashboardButton  url={'/courses'} active={location.pathname==='/admin/courses'}  Icon={RiEyeFill} text={'courses'}/>
            <DashboardButton  url={'/users'} active={location.pathname==='/admin/users'} Icon={RiUser3Fill} text={'Users'}/>
            <DashboardButton  url={'/createcourse'} Icon={RiAddCircleFill} active={location.pathname==='/admin/createcourse'} text={'Create Course'}/>

  
  </VStack>
  )
}

function DashboardButton({url,text,Icon,active}){
return (

          <Link to={`/admin${url}`}>
        <Button  variant={'ghost'} colorScheme={active?'purple':""} fontSize={'larger'}>
            <Icon style={{margin:'4px'}}/>
        {text}  
        </Button>   
    </Link> 
)
}

export default Sidebar