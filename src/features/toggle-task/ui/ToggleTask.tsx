import Checkbox from '@mui/material/Checkbox';
import { ActionType, ITask } from '../../../entities/task';
import { FC, useCallback, useContext } from 'react';
import { TasksContext } from '../../../shared/context';

interface IToggleTask {
  data: ITask;
}

const ToggleTask: FC<IToggleTask> = ({ data }) => {
  const { isDone } = data;

  const { changeState } = useContext(TasksContext);

  const toggleStatus = useCallback(() => {
    changeState && changeState({ type: ActionType.TOGGLE, payload: data });
  }, [changeState, data]);

  return <Checkbox checked={isDone} onClick={toggleStatus} />;
};

export default ToggleTask;
