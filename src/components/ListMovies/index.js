import { Box, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import CardMovie from '../Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoreMovies } from '../../config/store/action';

const ListMovies = () => {
  const dispatch = useDispatch();
  const { movies, loading, error, keyword, page } = useSelector(
    (state) => state.Movies
  );
  console.log(error, 'error');
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    const bottom =
      document.documentElement.clientHeight +
        document.documentElement.scrollTop ===
      document.documentElement.scrollHeight;
    if (bottom) {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchMoreListItems = () => {
    setTimeout(() => {
      dispatch(fetchMoreMovies(keyword, page));
      setIsFetching(false);
    }, 2000);
  };

  useEffect(() => {
    if (isFetching) {
      fetchMoreListItems();
    }
  }, [isFetching]);

  return (
    <>
      <Box
        display='flex'
        flexWrap='wrap'
        flexDir='row'
        width='100%'
        justifyContent='center'
        paddingBottom='100px'
        maxHeight='100vh'
        marginBottom='100px'
      >
        {loading && <Text>Searching ....</Text>}
        {movies && movies.length === 0 && !loading && (
          <Text color='#000' fontSize='5xl' textAlign='center'>
            Search your Favourite Movie on the right top search bar
          </Text>
        )}
        {movies &&
          movies.length !== 0 &&
          movies.map((movie, index) => <CardMovie movie={movie} key={index} />)}
        {isFetching && (
          <Box
            width='100%'
            height='100px'
            display='flex'
            justifyContent='center'
            textAlign='center'
          >
            <Text>Load More ....</Text>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ListMovies;
