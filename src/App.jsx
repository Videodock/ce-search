import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'theming';
import { JssProvider } from '@andywer/style-api-jss';
import Layout from './components/Layout/Layout';
import client from './apollo';

import theme from './theme';

// fix useMutationEffect issue in style-api-jss
React.useMutationEffect = React.useEffect;

// need to export JssProvider and ThemeProvider

const App = () => (
  <ApolloProvider client={client}>
    <JssProvider>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </JssProvider>
  </ApolloProvider>
);

export default App;
