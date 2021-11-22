const initialState = {
  movies: [],
  selectedMovie: {},
  error: null,
  loading: false,
  keyword: '',
  page: 1,
  items: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'fetchMovies':
      return { ...state, movies: payload };
    case 'fetchMoreMovies':
      return { ...state, movies: payload };
    case 'setKeyword':
      return { ...state, keyword: payload };
    case 'setSuggested':
      return { ...state, items: payload };
    case 'fetchDetailMovies':
      return { ...state, selectedMovie: payload };
    case 'loadingMovies':
      return { ...state, loading: payload };
    case 'setPage':
      return { ...state, page: payload };
    case 'loadingMoreMovies':
      return { ...state, loading: payload };
    case 'loadingDetailMovies':
      return { ...state, loading: payload };
    case 'setError':
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default reducer;
