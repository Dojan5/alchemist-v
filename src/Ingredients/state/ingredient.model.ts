import { ID } from '@datorama/akita';
import { Effect } from '../../Effects/state/effect.model';

export enum Availability {
  None,
  Common,
  Uncommon,
  Rare
}

export enum DLC {
  Base,
  Dawnguard,
  Hearthfire,
  Dragonborn,
}

export interface Ingredient {
  id: ID;
  name: string;
  primary: ID | Effect;
  secondary: ID | Effect;
  tertiary: ID | Effect;
  quaternary: ID | Effect;
  value: number;
  weight: number;
  availability?: Availability;
  availabilityIfPerk?: Availability;
  dlcAvailability?: DLC;
  garden?: number;
  unique?: boolean;
  uespLink?: URL;
  owned: boolean;
}

export function createIngredient(params: Partial<Ingredient>) {
  return {

  } as Ingredient;
}
