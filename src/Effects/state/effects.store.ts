import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Effect } from './effect.model';

export interface EffectsState extends EntityState<Effect> {}

@StoreConfig({
  name: 'Effects'
})
export class EffectsStore extends EntityStore<EffectsState> {

  constructor() {
    super();
  }

}

export const effectsStore = new EffectsStore();

