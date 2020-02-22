import { ID } from '@datorama/akita';
import { IngredientsStore, ingredientsStore } from './ingredients.store';

export class IngredientsService {

  constructor(private ingredientsStore: IngredientsStore) {
  }

  

}

export const ingredientsService = new IngredientsService(ingredientsStore);