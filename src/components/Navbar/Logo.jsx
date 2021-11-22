import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function Logo(props) {
  return (
    <Box {...props} width='300px' marginLeft='50px'>
      <Link href='/'>
        <Text
          fontSize='xl'
          fontWeight='bold'
          fontFamily='monlo'
          cursor='pointer'
        >
          MyMovies
        </Text>
      </Link>
    </Box>
  );
}
