import { ID } from '@datorama/akita';
import { AlchemyStore, alchemyStore } from './alchemy.store';

export class AlchemyService {

  constructor(private alchemyStore: AlchemyStore) {
  }

}

export const alchemyService = new AlchemyService(alchemyStore);