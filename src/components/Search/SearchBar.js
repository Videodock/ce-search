import React, { useState } from 'react';
import useStyles from '../../hooks/useStyles';
import Search from '../Icons/Search';

const styles = theme => ({
  root: {
    height      : 96,
    padding     : theme.spacing.unit * 3,
    borderBottom: `2px solid ${theme.palette.primary.dark}`,
  },
  form: {
    position: 'relative',
  },
  input: {
    width       : '100%',
    height      : 48,
    padding     : '12px 60px 12px 16px',
    background  : theme.palette.primary.main,
    appearance  : 'none',
    border      : 'none',
    fontSize    : '1.125em',
    borderRadius: 7,
  },
  button: {
    display       : 'inline-flex',
    alignItems    : 'center',
    justifyContent: 'center',
    position      : 'absolute',
    right         : 8,
    top           : 6,
    width         : 36,
    height        : 36,
    background    : theme.palette.primary.darker,
    color         : theme.palette.common.white,
    border        : 'none',
    appearance    : 'none',
    borderRadius  : 6,
    fontSize      : '1.125rem',
  },
});

type SearchBarProps = {
  /**
   * Called when the SearchBar form gets submitted
   * @param {string} query
   */
  onSubmit?: (query: string) => void;
};

const SearchBar = (props: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const classes           = useStyles(styles);

  const handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (props.onSubmit) {
      props.onSubmit(query);
    }
  };

  const handleOnChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          className={classes.input}
          type="text"
          value={query}
          onChange={handleOnChange}
        />
        <button className={classes.button} type="submit">
          <Search />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
