import React from 'react';
import useStyles from '../../hooks/useStyles';
import SearchResult from './SearchResult';

const styles = () => ({
  root: {
    border      : `1px solid gray`,
    borderRadius: 3,
  },
});

const SearchResultCreativeWork = props => {
  const classes = useStyles(styles);

  return (
    <SearchResult className={classes.root}>
      {props.creativeWork.name}
    </SearchResult>
  );
};

export default SearchResultCreativeWork;
