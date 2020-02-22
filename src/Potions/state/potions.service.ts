import { ID } from '@datorama/akita';
import { PotionsStore, potionsStore } from './potions.store';

export class PotionsService {

  constructor(private potionsStore: PotionsStore) {
  }

}

export const potionsService = new PotionsService(potionsStore);