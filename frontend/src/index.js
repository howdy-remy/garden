import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ApolloClient, InMemoryCache, HttpLink, from, ApolloProvider } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';

import './index.css';
import Routes from './Routes';
import store from './store';
import theme from './common/theme';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});
const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
