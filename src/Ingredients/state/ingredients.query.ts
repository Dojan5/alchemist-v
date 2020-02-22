import { QueryEntity, ID } from '@datorama/akita';
import { IngredientsStore, IngredientsState, ingredientsStore } from './ingredients.store';
import { defaultState } from './ingredients.defaultstate';
import { EffectsQuery, Effect } from '../../Effects/state/';
import { combineLatest } from 'rxjs';
import { map, filter, auditTime } from 'rxjs/operators';
import { effectsQuery } from '../../Effects/state/effects.query';
import { Ingredient } from './ingredient.model';

export class IngredientsQuery extends QueryEntity<IngredientsState> {
  ingredients$ = this.getIngredients();
  active$ = this.selectActive();

  constructor(protected store: IngredientsStore, private effectsQuery: EffectsQuery) {
    super(store);
  }

  initialise() {
    this.store.add(defaultState());
  }

  getIngredients() {
    return combineLatest(
      this.selectAll(),
      this.effectsQuery.selectAll()).pipe(
        auditTime(0),
        map(([ingredients, effects]) => {
          return ingredients.map((ingredient: Ingredient) => {
            return {
              ...ingredient,
              primary: effects.filter(e => e.id === ingredient.primary)[0],
              secondary: effects.filter(e => e.id === ingredient.secondary)[0],
              tertiary: effects.filter(e => e.id === ingredient.tertiary)[0],
              quaternary: effects.filter(e => e.id === ingredient.quaternary)[0]
            }
          })
        })
      )
  }

  search(q: string) {
    console.log(`Querying for ${q}`);
    // this.ingredients$ = this.selectAll({
    //   filterBy: entity => entity.name.includes(q)
    // })
  }

  setActive(id: ID) {
    this.store.setActive(id);
  }

  deselectActive() {
    this.store.setActive(null);
  }

  toggleOwned(id: ID) {
    let entity = this.getEntity(id);
    this.store.update(id, { owned: !entity.owned } );
  }

}

export const ingredientsQuery = new IngredientsQuery(ingredientsStore, effectsQuery);
