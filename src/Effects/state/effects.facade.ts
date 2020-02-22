import { EffectsStore, effectsStore } from './effects.store';
import { EffectsQuery, effectsQuery } from './effects.query';
import { useObservable } from '@mindspace-io/utils';
import { Effect } from './effect.model';

export class EffectsFacade {
  readonly effects$ = this.query.effects$;

  constructor(private store: EffectsStore, private query: EffectsQuery) {}

  initialiseDefaultState() { this.query.initialise() }
}

export const facade = new EffectsFacade(effectsStore, effectsQuery);

export type EffectsHookTuple = [Effect[], EffectsFacade];

export function useEffectsHook(): EffectsHookTuple {
  const [effects] = useObservable(facade.effects$, []);

  return [effects, facade];
}
