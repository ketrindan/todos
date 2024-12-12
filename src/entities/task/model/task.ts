import { filterTasks } from '../lib';
export interface ITask {
  id: string;
  text: string;
  isDone: boolean;
}

export enum ActionType {
  ADD = 'ADD',
  TOGGLE = 'TOGGLE',
  FILTER = 'FILTERTASKS',
  CLEARCOMPLETED = 'CLEARCOMPLETED',
}

export enum filterType {
  ALL = 'All',
  ACTIVE = 'Active',
  COMPLETED = 'Completed',
}

type ActionStringPayload = {
  type: ActionType.ADD;
  payload: string;
};

type ActionObjectPayload = {
  type: ActionType.TOGGLE;
  payload: ITask;
};

type ActionArrayPayload = {
  type: ActionType.CLEARCOMPLETED;
  payload: ITask[];
};

type ActionFilterPayload = {
  type: ActionType.FILTER;
  payload: filterType;
};

export type Action =
  | ActionStringPayload
  | ActionObjectPayload
  | ActionArrayPayload
  | ActionFilterPayload;

export type State = {
  tasks: ITask[];
  filteredTasks: ITask[];
  filter: filterType;
};

export const tasksReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.ADD: {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length.toString(),
            text: action.payload,
            isDone: false,
          },
        ],
      };
    }
    case ActionType.TOGGLE: {
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) =>
            task.id === action.payload.id
              ? { ...task, isDone: !task.isDone }
              : task
          ),
        ],
        filteredTasks: [
          ...state.filteredTasks.filter(
            (task) => task.id !== action.payload.id
          ),
        ],
      };
    }
    case ActionType.FILTER: {
      return {
        ...state,
        filteredTasks: filterTasks(action.payload, state.tasks),
        filter: action.payload,
      };
    }
    case ActionType.CLEARCOMPLETED: {
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => !task.isDone)],
        filteredTasks: [...state.filteredTasks.filter((task) => !task.isDone)],
      };
    }
    default:
      throw new Error('Unexpected action');
  }
};
