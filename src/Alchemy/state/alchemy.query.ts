import { QueryEntity } from '@datorama/akita';
import { AlchemyStore, AlchemyState, alchemyStore } from './alchemy.store';

export class AlchemyQuery extends QueryEntity<AlchemyState> {

  constructor(protected store: AlchemyStore) {
    super(store);
  }

}

export const alchemyQuery = new AlchemyQuery(alchemyStore);
