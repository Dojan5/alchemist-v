import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Alchemy } from './alchemy.model';

export interface AlchemyState extends EntityState<Alchemy> {}

@StoreConfig({
  name: 'alchemy'
})
export class AlchemyStore extends EntityStore<AlchemyState> {

  constructor() {
    super();
  }

}

export const alchemyStore = new AlchemyStore();

