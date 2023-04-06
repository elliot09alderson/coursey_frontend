import React from 'react';
import {
  Grid,
  Box,
  Image,
  Heading,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  HStack,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import cursor from '../../../assets/Images/cursor.png';
import Sidebar from '../Dashboard/Sidebar.jsx';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import ROG from '../../../assets/Images/ROG.jpg';
import CourseModal from './CourseModal';
const AdminCourses = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const courses = [
    {
      _id: 'dmksdsd',
      title: 'React Course',
      category: 'web Development',
      poster: {
        url: ROG,
      },
      createdBy: 'Er.Pratik',
      views: 623,
      numberOfVideos: 12,
    },
  ];

  const courseDetailHandler = userId => {
    onOpen();
  };
  const deleteButtonHandler = userId => {
    console.log(userId);
  };
  function deleteLectureButtonHandler(courseId, lectureId) {
    console.log(courseId);
    console.log(lectureId);
  }

  function addLectureHandler(e, courseId, title, description, video) {
    e.preventDefault();
  }
  return (
    <Grid
      minH={'100vh'}
      css={{
        cursor: `url(${cursor}),default `,
      }}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '16']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children={'All Users'}
          my={16}
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available Courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map((item, idx) => (
                <Row
                  key={item + idx}
                  item={item}
                  courseDetailHandler={courseDetailHandler}
                  deleteButtonHandler={deleteButtonHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={'sdsads'}
          courseTitle={'React Advanced'}
          deleteLectureButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
        />
      </Box>

      <Sidebar />
    </Grid>
  );
};

function Row({ item, courseDetailHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.title}</Td>
      <Td>
        <Image src={item.poster.url} />{' '}
      </Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numberOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            variant={'outline'}
            onClick={() => courseDetailHandler(item._id)}
            color="purple.500"
          >
            View Lectures
          </Button>
          <Button
            color={'purple.600'}
            onClick={() => deleteButtonHandler(item._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminCourses;
