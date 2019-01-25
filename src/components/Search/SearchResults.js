import React from 'react';
import useStyles from '../../hooks/useStyles';

const styles = ({ spacing }) => ({
  header: {
    minHeight   : 54,
    marginBottom: spacing.unit * 2,
  },
});

const SearchResults = props => {
  const classes = useStyles(styles);

  return (
    <div className={props.className}>
      <header className={classes.header}>
        {props.results} results
      </header>
      {props.children}
    </div>
  );
};

export default SearchResults;
