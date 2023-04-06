import {
  Avatar,
  Button,
  Container,
  Text,
  Heading,
  HStack,
  Stack,
  VStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  useDisclosure,
  ModalHeader,
} from '@chakra-ui/react';
import React from 'react';
import {  RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../Auth/Register/Register';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Profile = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const user = {
    name: 'pratik',
    email: 'pratikverma9691@gmail.com',
    role: 'idk',
    createdAt: String(new Date().toISOString()),
    subscription: {
      status: 'active',
    },
    playlist: [
      {
        course: 'kndfndkf',
        poster: 'dknnfdf',
        length: 4,
      },
    ],
  };

  const removeFromPlaylistHandler = id => {
    console.log('sdhsj');
  };

  const changeImageSubmitHandler = (e, image) => {};
  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
      <Heading children={'Profile'} m={'8'} textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        spacing={['8', '16']}
        alignItems={'center'}
        padding={8}
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button onClick={onOpen} colorScheme={'yellow'} variant="ghost">
            Change Photo
          </Button>
        </VStack>
        <VStack spacing={4} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />

            <Text children={user.name} />
          </HStack>{' '}
          <HStack>
            <Text children="Email" fontWeight={'bold'} />

            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="Created at" fontWeight={'bold'} />

            <Text children={user.createdAt.split('T')[0]} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children={'Subscription'} fontWeight={'bold'} />
              {user.subscription.status === 'active' ? (
                <Button color={'yellow.500'} variant={'unstyled'}>
                  Cancel Subscription
                </Button>
              ) : (
                <Link to={'/subscribe'}>
                  <Button colorScheme={'yellow'}>Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children="Playlist" size={'md'} my={'8'} />

      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p={4}
        >
          {user.playlist.map((element, index) => {
            return (
              <VStack w={'48'} m={'2'} key={element.course}>
                <Image
                  boxSize={'full'}
                  objectFit="contain"
                  src={element.poster}
                />
                <HStack>
                  <Link to={`/course/${element.course}`}>
                    <Button variant={'ghost'} colorScheme="yellow">
                      Watch Now
                    </Button>
                  </Link>
                  <Button
                    onClick={() => removeFromPlaylistHandler(element.course)}
                  >
                    <RiDeleteBin7Fill />
                  </Button>
                </HStack>
              </VStack>
            );
          })}
        </Stack>
      )}
      <ChangePhotoBox
        isOpen={isOpen}
        onClose={onClose}
        changeImageSubmitHandler={changeImageSubmitHandler}
      />
    </Container>
  );
};
function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');
  const onCloseHandler = () => {
    onClose();
    setImage('');
    setImagePrev('');
  };
  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  return (
    <Modal isOpen={isOpen} onClose={onCloseHandler}>
      <ModalOverlay backdropFilter={"blur('10px)"} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={5} >
                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}
                <Input
                  type={'file'}
                  css={{ '&::file-selector-button': fileUploadCss }}
                  onChange={changeImage}    
                />
                <Button w="full" colorScheme={'yellow'} type="submit">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr={'3'} onClick={onCloseHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Profile;
