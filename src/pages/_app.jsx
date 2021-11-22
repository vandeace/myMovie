import { ChakraProvider } from '@chakra-ui/react';
import { Provider, useDispatch } from 'react-redux';
import theme from '../theme';
import { AppProps } from 'next/app';
import store from '../config/store/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
