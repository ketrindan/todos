import { filterType, State } from '../entities/task';

export const initialState: State = {
  tasks: [
    {
      id: '1',
      text: 'Написать код',
      isDone: true,
    },
    {
      id: '2',
      text: 'Покрыть тестами',
      isDone: false,
    },
    {
      id: '3',
      text: 'Пообедать',
      isDone: true,
    },
  ],
  filteredTasks: [],
  filter: filterType.ALL,
};
