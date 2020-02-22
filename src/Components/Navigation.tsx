import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, createStyles, Theme } from '@material-ui/core';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    position: 'fixed',
    left: 0,
    right: 0,
    boxShadow: theme.shadows[5],
    bottom: 0,
    zIndex: 1000,
  }
}))
export interface INavigationProps {
}

export default function Navigation(props: INavigationProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      className={classes.root}
    >
      <BottomNavigationAction 
        component={Link}
        to="/"
        icon={<FilterVintageIcon />}
        label="Ingredients" 
      />
      <BottomNavigationAction 
        component={Link}
        to="/Alchemy"
        icon={<StarIcon />}
        label="Alchemy" 
      />
      <BottomNavigationAction 
        component={Link}
        to="Potions"
        icon={<WhatshotIcon />}
        label="Potions" 
      />
    </BottomNavigation>
  );
}
