import { VStack,Image, Heading,Text, HStack, Stack,Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Course = ({views,title,imageSrc,id,addToPlayListHandler,creator,description,lecture}) => {
  return (
  <VStack className='course'
  alignItems={['center',"flex-start"]}
  
  >
    <Image src={imageSrc} boxSize="60" objectFit={"contain"}/>
<Heading textAlign={['center','left']} maxW={"200px"} fontFamily={"sans-serif"} noOfLines={3} size={'sm'} children={title}/>
<Text noOfLines={2} children={description}/>
<HStack>
    <Text children={"Creator"} fontWeight={'bold'}
    textTransform="uppercase" 

    />
        <Text children={creator} fontFamily={'body'}
    textTransform="uppercase" 

    />
</HStack>
<Heading textAlign={"center"} size="xs" children={`Lectures - ${lecture}`} textTransform={'uppercase'}/>
<Heading textAlign={"center"} size="xs" children={`Views - ${views}`} textTransform={'uppercase'}/>
<Stack alignItems={'center'} direction={['column',"row"]}>
        <Button  colorScheme={'yellow'}>
    <Link to={`/course/${id}`}>
    {/* <Link to={'/rse'}> */}
            Watch Now
    </Link>
        </Button>
    <Button  variant={'ghost'} colorScheme={'yellow'} onClick={()=>addToPlayListHandler(id)}>Add to Playlist</Button>

</Stack>
  </VStack>
  )
}

export default Course   