import {
  Box,
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  Button,
  Input,
  ModalFooter,
} from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import React from 'react';
import { useState } from 'react';
import { fileUploadCss } from '../../Auth/Register/Register';

const CourseModal = ({
  isOpen,
  courseTitle,
  id,
  onClose,
  deleteButtonHandler,
  addLectureHandler,
  deleteLectureButtonHandler,
  lectures = [1,2,23,23,232,32,3],
}) => {


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [videoPrev, setVideoPrev] = useState('');

  const changeVideoHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };
  const handleClose=()=>{
    setTitle('')
    setDescription('')
    setVideo('')
    setVideoPrev('')
    onClose()
  }
  return (
    <Modal isOpen={isOpen} onClose={handleClose} scrollBehavior={'outside'} size={'full'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton onClick={onClose}/>
        <ModalBody p="16">
          <Grid templateColumns={['1fr', '3fr 1fr']}>
            <Box px={['0', '16']}>
              <Box my={5}>
                <Heading children={courseTitle} />
                <Heading children={`#${id}`} size="sm" opacity={0.4} />
              </Box>
              <Heading children={'Lectures'} size={'lg'} />
            
              {lectures.map((item,idx)=><VideoCard
                num={idx+1}
                key={item+idx}
                description={
                  'Advanced React with Redux,Chakra UI and Razor Pay integration'
                }
                lectureId={'ghi117'}
                title={'Advanced React'}
                courseId={id}
                deleteLectureButtonHandler={deleteLectureButtonHandler}
              />)}
            </Box>
            <Box>
              <form
                onSubmit={e =>
                  addLectureHandler(e, id, title, description, video)
                }
              >
                <VStack spacing={4}>
                  <Heading
                    children="Add Lecture"
                    size={'md'}
                    textTransform={'uppercase'}
                  />
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                  <Input
                    accept="video/mp4"
                    required
                    type="file"
                    focusBorderColor="purple.300"
                    onChange={changeVideoHandler}
                    css={{
                      '&::file-selector-button': {
                        ...fileUploadCss,
                        color: 'purple',
                      },
                    }}
                  />
                  {
                    videoPrev && (
                      <video controlsList='nodowload' controls src={videoPrev}>

                      </video>
                    )
                  }
                  <Button w="full" colorScheme={'purple'} type="submit">
                    Upload
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModal;

function VideoCard({
  num,
  description,
  lectureId,
  title,
  courseId,
  deleteLectureButtonHandler,
}) {
  return (
    <Stack
      direction={['column', 'row']}
      my="8"
      borderRadius={'lg'}
      boxShadow={' 0 0 10px rgba(107,70,193,0.5) '}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading size={'sm'} children={`#${num} ${title}`} />
        <Text children={description} />
      </Box>
      <Button
        color={'purpule.600'}
        onClick={() => deleteLectureButtonHandler(courseId, lectureId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
}
