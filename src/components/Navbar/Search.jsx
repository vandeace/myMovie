import { Box } from '@chakra-ui/layout';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { fetchMovies, clear } from '../../config/store/action';

const SearchBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { items, loading } = useSelector((state) => state.Movies);
  console.log(items, 'items');

  const handleOnSearch = (string) => {
    dispatch(fetchMovies(string));
  };
  const handleOnSelect = (item) => {
    router.push(`/detail/${item.id}`);
  };
  const formatResult = (item) => {
    return item;
  };
  return (
    <Box style={{ width: 400 }}>
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleOnSearch}
        autoFocus
        placeholder='Search the Movie'
        inputDebounce={1000}
        formatResult={formatResult}
        onSelect={handleOnSelect}
        onClear={() => dispatch(clear())}
      />
    </Box>
  );
};

export default SearchBar;
