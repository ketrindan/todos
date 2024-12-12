import { filterType, State } from '../entities/task';

export const initialState: State = {
  tasks: [
    {
      id: '0',
      text: 'Написать код',
      isDone: true,
    },
    {
      id: '1',
      text: 'Покрыть тестами',
      isDone: false,
    },
    {
      id: '2',
      text: 'Пообедать',
      isDone: true,
    },
  ],
  filteredTasks: [],
  filter: filterType.ALL,
};
