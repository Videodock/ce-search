import React, { useState } from 'react';
import { Query } from 'react-apollo';
import useStyles from '../../hooks/useStyles';
import SearchResultCreativeWork from '../Search/SearchResultCreativeWork';
import Filters from '../Filters/Filters';
import SearchResultMusicComposition from '../Search/SearchResultMusicComposition';
import SearchResultPerson from '../Search/SearchResultPerson';
import SearchResults from '../Search/SearchResults';
import SearchBar from '../Search/SearchBar';
import SearchMetadataText from '../../apollo/http/queries/SearchMetadataTextQuery';

const styles = ({ spacing }) => ({
  root: {
    '& *': {
      boxSizing: 'border-box',
    },
    fontFamily: '"Lato", sans-serif',
  },
  row: {
    display: 'flex',
  },
  sidebar: {
    width : 206,
    margin: spacing.unit * 3,
  },
  main: {
    flex  : 1,
    margin: spacing.unit * 3,
  },
});

const renderResult = item => {
  switch (item.__typename) {
  case 'Person':
    return <SearchResultPerson person={item} key={item.identifier} />;
  case 'CreativeWork':
    return <SearchResultCreativeWork creativeWork={item} key={item.identifier} />;
  case 'MusicComposition':
    return <SearchResultMusicComposition creativeWork={item} key={item.identifier} />;
  default:
    return null;
  }
};

const Layout = () => {
  const classes           = useStyles(styles);
  const [query, setQuery] = useState('');

  return (
    <Query query={SearchMetadataText} variables={{ substring: query ? query : 'a' }}>
      {({ data, loading, error }) => {
        return (
          <div className={classes.root}>
            <SearchBar onSubmit={query => setQuery(query)} />
            <div className={classes.row}>
              <Filters className={classes.sidebar} />
              <div className={classes.main}>
                <SearchResults results={data.results ? data.results.length : 0}>
                  {data.results && data.results.map(renderResult)}
                </SearchResults>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Layout;
