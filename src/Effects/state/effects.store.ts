import { EntityState, EntityStore, StoreConfig, HashMap } from '@datorama/akita';
import { Effect } from './effect.model';

export interface EffectsState extends EntityState<Effect> {
  entities: HashMap<Effect>;
  active: Effect[] | []
}

let initialState = {
  active: [],
}

@StoreConfig({
  name: 'Effects'
})
export class EffectsStore extends EntityStore<EffectsState> {
  constructor() {
    super(initialState);
  }

}

export const effectsStore = new EffectsStore();

