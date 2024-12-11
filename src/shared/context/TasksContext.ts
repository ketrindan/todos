import { createContext, Dispatch } from 'react';
import { Action, State } from '../../entities/task';

export type ContextState = {
  state: State;
  changeState: Dispatch<Action>;
};

export const TasksContext = createContext<Partial<ContextState>>({});
