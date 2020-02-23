import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, makeStyles, Theme, createStyles } from '@material-ui/core';
import { useIngredientsHook } from './Ingredients/state/ingredients.facade';
import Ingredients from './Ingredients';
import Alchemy from './Alchemy';
import Potions from './Potions';
import Navigation from './Components/Navigation';
import { useEffectsHook } from './Effects/state/effects.facade';


const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(12)
  }
}))

function App() {
  const classes = useStyles();
  const [,, ingredientsFacade] = useIngredientsHook();
  const [, effectsFacade] = useEffectsHook();

  React.useEffect(() => {
    effectsFacade.initialiseDefaultState();
    ingredientsFacade.initialiseDefaultState();
  },[ingredientsFacade, effectsFacade]);
  
  return (
    <Router>
      <Navigation />
      <Container className={classes.container} >
        <Switch>
          <Route path="/" exact component={Ingredients} />
          <Route path="/Alchemy" component={Alchemy} />
          <Route path="/Potions" component={Potions} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
