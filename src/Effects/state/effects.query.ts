import { QueryEntity } from '@datorama/akita';
import { EffectsStore, EffectsState, effectsStore } from './effects.store';
import { defaultState } from './effects.defaultstate';

export class EffectsQuery extends QueryEntity<EffectsState> {
  effects$ = this.selectAll();

  constructor(protected store: EffectsStore) {
    super(store);
  }

  initialise() {
    this.store.add(defaultState())
  }
}

export const effectsQuery = new EffectsQuery(effectsStore);
