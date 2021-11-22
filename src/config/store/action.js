import axios from '../axios';

function setLoadingMovies(payload) {
  return {
    type: 'loadingMovies',
    payload,
  };
}

function setMovies(payload) {
  return {
    type: 'fetchMovies',
    payload,
  };
}

function setError(payload) {
  console.log(payload, 'payload');
  return {
    type: 'setError',
    payload,
  };
}

function setKeyword(payload) {
  return {
    type: 'setKeyword',
    payload,
  };
}

function setPage(payload) {
  return {
    type: 'setPage',
    payload,
  };
}

function setDetails(payload) {
  return {
    type: 'fetchDetailMovies',
    payload,
  };
}

function setItems(payload) {
  let data;
  if (payload.length !== 0) {
    data = payload.map((item) => ({
      id: item.imdbID,
      name: item.Title,
    }));
  } else {
    data = payload;
  }
  return {
    type: 'setSuggested',
    payload: data,
  };
}

export function clear() {
  return async (dispatch) => {
    await dispatch(setLoadingMovies(false));
    await dispatch(setItems([]));
    await dispatch(setMovies([]));
  };
}

export function fetchMovies(keyword) {
  return async (dispatch) => {
    try {
      await dispatch(setLoadingMovies(true));
      await dispatch(setKeyword(keyword));
      const { data } = await axios({
        method: 'GET',
        url: `&s=${keyword}&page=1&type=movie`,
      });
      await dispatch(setItems(data.Search));
      await dispatch(setLoadingMovies(false));
      await dispatch(setMovies(data.Search));
    } catch (error) {
      await dispatch(setError(error));
      console.log(error);
    }
  };
}

export function fetchMoreMovies(keyword, page) {
  return async (dispatch, getState) => {
    const state = getState();
    let newData = [];
    try {
      await dispatch(setLoadingMovies(true));
      const currentPage = page + 1;
      const { data } = await axios({
        method: 'GET',
        url: `&s=${keyword}&page=${currentPage}&type=movie`,
      });
      await dispatch(setLoadingMovies(false));
      newData = [...state.Movies.movies, ...data.Search];
      await dispatch(setMovies(newData));
      await dispatch(setPage(currentPage));
    } catch (error) {
      await dispatch(setError('No More Item'));
    }
  };
}

export function fetchDetailMovie(param) {
  return async (dispatch) => {
    try {
      await dispatch(setLoadingMovies(true));
      const { data } = await axios({
        method: 'GET',
        url: `&i=${param}&plot=full`,
      });
      await dispatch(setDetails(data));
      await dispatch(setLoadingMovies(false));
    } catch (error) {
      await dispatch(setError(error));
    }
  };
}
