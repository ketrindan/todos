import Checkbox from '@mui/material/Checkbox';
import { ActionType, ITask } from '../../../entities/task';
import { FC, useContext } from 'react';
import { TasksContext } from '../../../shared/context';

interface IToggleTask {
  data: ITask;
}

const ToggleTask: FC<IToggleTask> = ({ data }) => {
  const { isDone } = data;

  const { state, changeState } = useContext(TasksContext);

  const toggleStatus = (task: ITask) => {
    changeState && changeState({ type: ActionType.TOGGLE, payload: task });
  };

  return <Checkbox checked={isDone} onClick={() => toggleStatus(data)} />;
};

export default ToggleTask;
