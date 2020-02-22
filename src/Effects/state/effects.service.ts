import { ID } from '@datorama/akita';
import { EffectsStore, effectsStore } from './effects.store';

export class EffectsService {

  constructor(private effectsStore: EffectsStore) {
  }

}

export const effectsService = new EffectsService(effectsStore);