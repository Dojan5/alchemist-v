import * as React from 'react';
import { useIngredientsHook } from '../state/ingredients.facade';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Paper, InputBase, Divider, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: '2px, 4px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  }

}))

interface ISearchProps {
}

export const Search: React.FunctionComponent<ISearchProps> = (props) => {
  const classes = useStyles();
  const [ingredients, active, facade] = useIngredientsHook();
  const [query, setQuery] = React.useState("");

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) {
    if(e.key === 'Enter') {
      facade.searchForIngredient(query);
    }
  }

  return (
    <Paper className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase 
        className={classes.input}
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        inputProps={{ 'aria-label': 'ingredient search' }}
      />
      <IconButton className={classes.iconButton} aria-label="search" onClick={() => facade.searchForIngredient(query)}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
