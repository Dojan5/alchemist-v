import { EntityState, EntityStore, StoreConfig, HashMap, ID } from '@datorama/akita';
import { defaultState } from './ingredients.defaultstate';
import { Ingredient } from './ingredient.model';

export interface IngredientsState extends EntityState<Ingredient> {
  entities: HashMap<Ingredient>;
  active: Ingredient | ID | null;
  ids: ID[];
}

let initialState = {
  active: null
}

@StoreConfig({
  name: 'Ingredients'
})
export class IngredientsStore extends EntityStore<IngredientsState> {

  constructor() {
    super(initialState);
  }

}

export const ingredientsStore = new IngredientsStore();

