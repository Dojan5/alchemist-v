import * as React from 'react';
import { Paper, List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox } from '@material-ui/core';
import { useIngredientsHook } from '../state/ingredients.facade';

export interface IIngredientListProps {
}

export const IngredientList: React.FunctionComponent<IIngredientListProps> = (props) => {
  const [ingredients, active, facade] = useIngredientsHook();

  return (
    <Paper>
      <List
      >
        {ingredients?.map(ing => (
          <ListItem 
            button
            key={ing.id} 
            onClick={() => facade.setActive(ing.id)}
            selected={active !== null && active !== undefined && active.id === ing.id}
          >
            <ListItemText primary={ing.name} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={() => facade.toggleOwned(ing.id)}
                checked={ing.owned}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}