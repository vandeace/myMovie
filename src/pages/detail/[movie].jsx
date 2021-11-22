import { Router, useRouter } from 'next/dist/client/router';
import { Container } from '../../components/Layout/Container';
import ListMovies from '../../components/ListMovies';
import { Main } from '../../components/Layout/Main';
import NavBar from '../../components/Navbar';
import { Box, Text } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailMovie } from '../../config/store/action';
import Link from 'next/link';
import { Button } from '@chakra-ui/button';
import { Modal } from '@chakra-ui/react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const MovieDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, error, selectedMovie } = useSelector(
    (state) => state.Movies
  );
  const [modal, setModal] = useState(false);

  console.log(selectedMovie, 'selectedMovie');
  useEffect(() => {
    dispatch(fetchDetailMovie(router.query.movie));
  }, []);

  return (
    <Container height='100vh'>
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <ModalOverlay />
        <ModalContent height='90vh' width='500px'>
          <img
            src={selectedMovie.Poster}
            style={{ height: '100%', width: '100%' }}
          />
        </ModalContent>
      </Modal>
      <NavBar search={false} />
      <Main>
        <Box background='#012B36' padding='20px'>
          <Box display='flex' flexDir='row' width='100%' color='#fff'>
            <img
              src={selectedMovie.Poster}
              width={300}
              height={60}
              onClick={() => setModal(true)}
            />
            <Box width='70%' display='flex' flexDir='column' marginLeft='20px'>
              <Text py='1' fontSize='6xl'>
                {selectedMovie.Title}
              </Text>
              <Text
                py='1'
                fontSize='2xl'
              >{`Released   :${selectedMovie.Released}`}</Text>
              <Text
                py='1'
                fontSize='2xl'
              >{`Actors     :${selectedMovie.Actors}`}</Text>
              <Text
                py='1'
                fontSize='2xl'
              >{`Director   :${selectedMovie.Director}`}</Text>
              <Text
                py='1'
                fontSize='2xl'
              >{`Writter    :${selectedMovie.Writer}`}</Text>
              <Text
                py='1'
                fontSize='2xl'
              >{`BoxOffice  :${selectedMovie.BoxOffice}`}</Text>
              <Text
                py='1'
                fontSize='2xl'
              >{`imdbRating :${selectedMovie.imdbRating}`}</Text>
              <Text py='1' fontSize='2xl'>{`Plot :${selectedMovie.Plot}`}</Text>
            </Box>
          </Box>
          <Box display='flex' justifyContent='flex-end'>
            <Link href='/'>
              <Button> Back</Button>
            </Link>
          </Box>
        </Box>
      </Main>
    </Container>
  );
};

export default MovieDetail;
