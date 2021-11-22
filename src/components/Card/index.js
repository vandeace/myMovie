import Link from 'next/link';
import { Box, Text } from '@chakra-ui/layout';

const CardMovie = ({ movie }) => {
  return (
    <Link href={`/detail/${movie.imdbID}`}>
      <Box
        p={4}
        display='flex'
        width='20rem'
        height='32rem'
        borderWidth={1}
        margin={5}
        flexDir='column'
        justifyContent='space-between'
        textAlign='center'
        cursor='pointer'
        background='#012B36'
        color='#fff'
      >
        <img src={movie.Poster} width={300} height={60} />
        <Text>
          {movie.Title} <br /> {movie.Year}
        </Text>
      </Box>
    </Link>
  );
};

export default CardMovie;
