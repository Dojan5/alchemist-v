import React from 'react';
import ReactDOM from 'react-dom';
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
  const [ingredients, activeIngredient, ingredientsFacade] = useIngredientsHook();
  const [effects, effectsFacade] = useEffectsHook();

  React.useEffect(() => {
    effectsFacade.initialiseDefaultState();
    ingredientsFacade.initialiseDefaultState();
  },[]);
  
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
