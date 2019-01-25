import React from 'react';
import useStyles from '../../hooks/useStyles';

const styles = ({ spacing }) => ({
  root: {
    border      : `1px solid #979797`,
    borderRadius: 3,
    padding     : spacing.unit * 2,
    marginBottom: spacing.unit,
  },
});

const SearchResult = props => {
  const classes = useStyles(styles);

  return (
    <div className={classes.root}>
      {props.children}
    </div>
  );
};

export default SearchResult;
