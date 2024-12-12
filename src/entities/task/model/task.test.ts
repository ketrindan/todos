import {
  tasksReducer,
  ActionType,
  Action,
  State,
  ITask,
  filterType,
} from './task';

describe('taskReducer', () => {
  it('adds new task', () => {
    const initialState: State = {
      tasks: [],
      filteredTasks: [],
      filter: filterType.ALL,
    };
    const updateAction: Action = {
      type: ActionType.ADD,
      payload: 'new task to do',
    };
    const updatedState = tasksReducer(initialState, updateAction);
    expect(updatedState).toEqual({
      tasks: [{ id: '0', text: 'new task to do', isDone: false }],
      filteredTasks: [],
      filter: filterType.ALL,
    });
  });

  it('adds new task correctly with ACTIVE filter', () => {
    const initialState: State = {
      tasks: [
        { id: '0', text: 'task 1', isDone: true },
        { id: '1', text: 'task 2', isDone: false },
        { id: '2', text: 'task 3', isDone: true },
        { id: '3', text: 'task 4', isDone: false },
      ],
      filteredTasks: [
        { id: '1', text: 'task 2', isDone: false },
        { id: '3', text: 'task 4', isDone: false },
      ],
      filter: filterType.ACTIVE,
    };
    const updateAction: Action = {
      type: ActionType.ADD,
      payload: 'new task to do',
    };
    const updatedState = tasksReducer(initialState, updateAction);
    expect(updatedState).toEqual({
      tasks: [
        { id: '0', text: 'task 1', isDone: true },
        { id: '1', text: 'task 2', isDone: false },
        { id: '2', text: 'task 3', isDone: true },
        { id: '3', text: 'task 4', isDone: false },
        { id: '4', text: 'new task to do', isDone: false },
      ],
      filteredTasks: [
        { id: '1', text: 'task 2', isDone: false },
        { id: '3', text: 'task 4', isDone: false },
        { id: '4', text: 'new task to do', isDone: false },
      ],
      filter: filterType.ACTIVE,
    });
  });

  it('adds new task correctly with COMPLETED filter', () => {
    const initialState: State = {
      tasks: [
        { id: '0', text: 'task 1', isDone: true },
        { id: '1', text: 'task 2', isDone: false },
        { id: '2', text: 'task 3', isDone: true },
        { id: '3', text: 'task 4', isDone: false },
      ],
      filteredTasks: [
        { id: '0', text: 'task 1', isDone: true },
        { id: '2', text: 'task 3', isDone: true },
      ],
      filter: filterType.COMPLETED,
    };
    const updateAction: Action = {
      type: ActionType.ADD,
      payload: 'new task to do',
    };
    const updatedState = tasksReducer(initialState, updateAction);
    expect(updatedState).toEqual({
      tasks: [
        { id: '0', text: 'task 1', isDone: true },
        { id: '1', text: 'task 2', isDone: false },
        { id: '2', text: 'task 3', isDone: true },
        { id: '3', text: 'task 4', isDone: false },
        { id: '4', text: 'new task to do', isDone: false },
      ],
      filteredTasks: [
        { id: '0', text: 'task 1', isDone: true },
        { id: '2', text: 'task 3', isDone: true },
      ],
      filter: filterType.COMPLETED,
    });
  });

  it('toggles status of the task', () => {
    const task: ITask = { id: '1', text: 'my task', isDone: false };
    const initialState: State = {
      tasks: [task],
      filteredTasks: [],
      filter: filterType.ALL,
    };
    const updateAction: Action = { type: ActionType.TOGGLE, payload: task };
    const updatedState = tasksReducer(initialState, updateAction);
    expect(updatedState).toEqual({
      tasks: [{ id: '1', text: 'my task', isDone: true }],
      filteredTasks: [],
      filter: filterType.ALL,
    });
  });

  it('removes from filtered category when toggles status', () => {
    const task: ITask = { id: '1', text: 'task 2', isDone: false };
    const initialState: State = {
      tasks: [
        { id: '0', text: 'task 1', isDone: true },
        { id: '1', text: 'task 2', isDone: false },
        { id: '2', text: 'task 3', isDone: true },
        { id: '3', text: 'task 4', isDone: false },
      ],
      filteredTasks: [
        { id: '1', text: 'task 2', isDone: false },
        { id: '3', text: 'task 4', isDone: false },
      ],
      filter: filterType.ACTIVE,
    };
    const updateAction: Action = { type: ActionType.TOGGLE, payload: task };
    const updatedState = tasksReducer(initialState, updateAction);
    expect(updatedState).toEqual({
      tasks: [
        { id: '0', text: 'task 1', isDone: true },
        { id: '1', text: 'task 2', isDone: true },
        { id: '2', text: 'task 3', isDone: true },
        { id: '3', text: 'task 4', isDone: false },
      ],
      filteredTasks: [{ id: '3', text: 'task 4', isDone: false }],
      filter: filterType.ACTIVE,
    });
  });

  it('removes completed tasks', () => {
    const tasks: ITask[] = [{ id: '0', text: 'completed task', isDone: true }];
    const initialState: State = {
      tasks: tasks,
      filteredTasks: [],
      filter: filterType.ALL,
    };
    const updateAction: Action = {
      type: ActionType.CLEARCOMPLETED,
      payload: tasks,
    };
    const updatedState = tasksReducer(initialState, updateAction);
    expect(updatedState).toEqual({
      tasks: [],
      filteredTasks: [],
      filter: filterType.ALL,
    });
  });

  it('filters active tasks', () => {
    const tasks: ITask[] = [
      { id: '0', text: 'task 1', isDone: true },
      { id: '1', text: 'task 2', isDone: false },
      { id: '2', text: 'task 3', isDone: true },
      { id: '3', text: 'task 4', isDone: false },
    ];
    const initialState: State = {
      tasks: tasks,
      filteredTasks: [],
      filter: filterType.ALL,
    };
    const updateAction: Action = {
      type: ActionType.FILTER,
      payload: filterType.ACTIVE,
    };
    const updatedState = tasksReducer(initialState, updateAction);
    expect(updatedState).toEqual({
      tasks: [
        { id: '0', text: 'task 1', isDone: true },
        { id: '1', text: 'task 2', isDone: false },
        { id: '2', text: 'task 3', isDone: true },
        { id: '3', text: 'task 4', isDone: false },
      ],
      filteredTasks: [
        { id: '1', text: 'task 2', isDone: false },
        { id: '3', text: 'task 4', isDone: false },
      ],
      filter: filterType.ACTIVE,
    });
  });

  it('filters completed tasks', () => {
    const tasks: ITask[] = [
      { id: '0', text: 'task 1', isDone: true },
      { id: '1', text: 'task 2', isDone: false },
      { id: '2', text: 'task 3', isDone: true },
      { id: '3', text: 'task 4', isDone: false },
    ];
    const initialState: State = {
      tasks: tasks,
      filteredTasks: [],
      filter: filterType.ALL,
    };
    const updateAction: Action = {
      type: ActionType.FILTER,
      payload: filterType.COMPLETED,
    };
    const updatedState = tasksReducer(initialState, updateAction);
    expect(updatedState).toEqual({
      tasks: [
        { id: '0', text: 'task 1', isDone: true },
        { id: '1', text: 'task 2', isDone: false },
        { id: '2', text: 'task 3', isDone: true },
        { id: '3', text: 'task 4', isDone: false },
      ],
      filteredTasks: [
        { id: '0', text: 'task 1', isDone: true },
        { id: '2', text: 'task 3', isDone: true },
      ],
      filter: filterType.COMPLETED,
    });
  });
});
