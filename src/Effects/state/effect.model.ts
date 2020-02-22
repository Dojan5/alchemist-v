import { ID } from '@datorama/akita';

export interface Effect {
  id: ID;
  name: string;
  description: string;
  baseCost: number;
  baseMag: number;
  baseDur: number;
}

export function createEffect(params: Partial<Effect>) {
  return {

  } as Effect;
}
