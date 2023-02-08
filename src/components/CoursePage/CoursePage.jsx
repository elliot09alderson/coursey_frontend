import { Container,Box,Text, Grid, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import introVideo from '../../assets/Videos/intro.mp4'

const CoursePage = () => {
  
 
  const [lectureNumber,setLectureNumber]=useState(0)
  const lectures = 
    [{
      _id:'akaakkakak',
      title:'sample1',
      description:'Sample sdkamdsa skdmsadm s sds dshdbasdsj a sasdssnjn',
      video:{
        url:'sdlmdamd'
      },
    },
    {
      _id:'akaakkakak2',
      title:'sample2',
      description:'Sample sdkamdsa skdmsadm s sds dshdbasdsj a sasdssnjn',
      video:{
        url:'sdlmdamd'
      },
    }, {
      _id:'akaakkakak3',
      title:'sample3',
      description:'Sample sdkamdsa skdmsadm s sds dshdbasdsj a sasdssnjn',
      video:{
        url:'sdlmdamd'
      },
    }]
    

  return (
<Grid minH={"90vh"} templateColumns={['1fr','3fr 1fr']}>
<Box>
  <video width={'100%'} controls controlsList='nodownload noremoteplayback' disablePictureInPicture disableRemotePlayback src={introVideo}>

  </video>
  <Heading m="4" children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`}/>
  <Heading m="4" children={`${lectures[lectureNumber].description}`}/>
  <Text m={'4'} children={"Adsadsasd"}/>
</Box>
<VStack>
  {
    lectures.map((element,index)=>{
          return (
            <button key={element._id}
            onClick={()=>setLectureNumber(index)}
            style={{width:'100%',
            padding:'1rem',
            textAlign:'center',
            margin:0,
            borderBottom:'1px solid rgba(0,0,0,0.2)'}}>                                                                                                                                                                                                                                                                                                                                                                      


              <Text noOfLines={1}>
                #{index+1} {element.title}
              </Text>
            </button>
          )
    })
  }
</VStack>
</Grid>
  )
}

export default CoursePage