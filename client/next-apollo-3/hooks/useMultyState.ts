/**
 * Can be use as setState from class components and operate with partial state
 */
import { Reducer, useReducer } from 'react';

type UseMultyState = <StateType>(P: Partial<StateType>) => [Partial<StateType>, (state: Partial<StateType>) => void];

export const useMultyState: UseMultyState = <StateType>(initState: Partial<StateType>) => {
  const [state, setState] = useReducer<Reducer<Partial<StateType>, Partial<StateType>>>(
    (s, n) => ({ ...s, ...n }),
    initState,
  );

  return [state, setState];
};
