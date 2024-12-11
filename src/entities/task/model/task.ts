import { v4 as uuidv4 } from 'uuid';
export interface ITask {
  id: string;
  text: string;
  isDone: boolean;
}

export enum ActionType {
  ADD = 'ADD',
  TOGGLE = 'TOGGLE',
  FILTERACTIVE = 'FILTERACTIVE',
  FILTERCOMPLETED = 'FILTERCOMPLETED',
  SHOWALL = 'SHOWALL',
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
  type:
    | ActionType.FILTERACTIVE
    | ActionType.FILTERCOMPLETED
    | ActionType.SHOWALL
    | ActionType.CLEARCOMPLETED;
  payload: ITask[];
};

export type Action =
  | ActionStringPayload
  | ActionObjectPayload
  | ActionArrayPayload;

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
            id: uuidv4(),
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
      };
    }
    case ActionType.FILTERACTIVE: {
      return {
        ...state,
        filteredTasks: [...state.tasks.filter((task) => !task.isDone)],
        filter: filterType.ACTIVE,
      };
    }
    case ActionType.FILTERCOMPLETED: {
      return {
        ...state,
        filteredTasks: [...state.tasks.filter((task) => task.isDone)],
        filter: filterType.COMPLETED,
      };
    }
    case ActionType.SHOWALL: {
      return {
        ...state,
        filteredTasks: [...state.tasks],
        filter: filterType.ALL,
      };
    }
    case ActionType.CLEARCOMPLETED: {
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => !task.isDone)],
      };
    }
    default:
      throw new Error('Unexpected action');
  }
};
