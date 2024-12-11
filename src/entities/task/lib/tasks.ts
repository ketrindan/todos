import { ITask } from '../model'

export const countUncompleted = (data: ITask[]): number => {
  const unCompleted = data.reduce(function (sum, task) {
    if (!task.isDone) {
      sum += 1
    }
    return sum
  }, 0)

  return unCompleted;
};
