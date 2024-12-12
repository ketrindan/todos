import { filterType, ITask } from '../model'

export const countUncompleted = (data: ITask[]): number => {
  const unCompleted = data.reduce(function (sum, task) {
    if (!task.isDone) {
      sum += 1
    }
    return sum
  }, 0)

  return unCompleted;
};

export const filterTasks = (filter: filterType, tasks: ITask[]): ITask[] => {
  switch (filter) {
    case filterType.ALL: {
      return [...tasks]
    }
    case filterType.ACTIVE: {
      return [...tasks.filter((task) => !task.isDone)]
    }
    case filterType.COMPLETED: {
      return [...tasks.filter((task) => task.isDone)]
    }
    default:
      throw new Error('Unexpected filter');
  }
}
