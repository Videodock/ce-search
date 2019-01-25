import React from 'react';
import useStyles from '../../hooks/useStyles';
import SearchResult from './SearchResult';

const styles = ({ spacing }) => ({
  root  : {},
  header: {
    display            : 'grid',
    gridTemplateColumns: '32px auto',
    gridTemplateRows   : '16px 16px',
    gridColumnGap      : `${spacing.unit * 2}px`,
    marginBottom       : spacing.unit * 2,
  },
  image: {
    gridColumn     : '2 / 1',
    gridRow        : '1 / 2',
    width          : 32,
    height         : 32,
    borderRadius   : '50%',
    backgroundColor: '#ccc',
    border         : 'none',
  },
  name: {
    gridColumn: '2',
    gridRow   : '1',
    margin    : 0,
  },
  jobTitle: {
    gridColumn: '2',
    gridRow   : '2',
  },
});

type Person = {
  name: string,
  image?: string,
  jobTitle?: string,
  description?: string,
}

type PersonResultProps = {
  className?: string,
  person: Person,
}

const SearchResultPerson = (props: PersonResultProps) => {
  const classes = useStyles(styles);

  const { image, name, jobTitle } = props.person;

  return (
    <SearchResult className={classes.root}>
      <header className={classes.header}>
        {image ? (
          <img className={classes.image} src={image} alt="Person thumbnail" />
        ) : (
          <div className={classes.image} />
        )}
        <h4 className={classes.name}>{name}</h4>
        <div className={classes.jobTitle}>{jobTitle || 'Unknown'}</div>
      </header>
      <nav className={classes.description}>
        Description (1) &bull; Compositions (100) &bull; Scores (20.540) &bull; Annotations (123)
      </nav>
    </SearchResult>
  );
};

export default SearchResultPerson;
