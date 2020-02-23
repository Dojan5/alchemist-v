import { IngredientsStore, ingredientsStore } from './ingredients.store';
import { IngredientsQuery, ingredientsQuery } from './ingredients.query';
import { useObservable } from '@mindspace-io/utils';
import { Ingredient } from './ingredient.model';
import { ID } from '@datorama/akita';

export class IngredientsFacade {
  readonly ingredients$ = this.query.ingredients$;
  readonly active$ = this.query.active$;

  constructor(private store: IngredientsStore, private query: IngredientsQuery) {}

  initialiseDefaultState() { this.query.initialise() }
  searchForIngredient(q: string) { this.query.search(q) }
  setActive(id: ID) { this.query.setActive(id) }
  clearActive() { this.query.deselectActive( ) }
  toggleOwned(id: ID) { this.query.toggleOwned(id) }
}

export const facade = new IngredientsFacade(ingredientsStore, ingredientsQuery);

export type IngredientsHookTuple = [Ingredient[], Ingredient | null | undefined, IngredientsFacade];

export function useIngredientsHook(): IngredientsHookTuple {
  const [ingredients] = useObservable(facade.ingredients$, []);
  const [ingredient] = useObservable(facade.active$, null);

  return [ingredients, ingredient, facade];
}
