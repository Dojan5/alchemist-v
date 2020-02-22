import { QueryEntity } from '@datorama/akita';
import { PotionsStore, PotionsState, potionsStore } from './potions.store';

export class PotionsQuery extends QueryEntity<PotionsState> {

  constructor(protected store: PotionsStore) {
    super(store);
  }

}

export const potionsQuery = new PotionsQuery(potionsStore);
