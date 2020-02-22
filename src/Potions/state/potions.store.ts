import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Potion } from './potion.model';

export interface PotionsState extends EntityState<Potion> {}

@StoreConfig({
  name: 'Potions'
})
export class PotionsStore extends EntityStore<PotionsState> {

  constructor() {
    super();
  }

}

export const potionsStore = new PotionsStore();

