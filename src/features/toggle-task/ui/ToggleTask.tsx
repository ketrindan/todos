import Checkbox from '@mui/material/Checkbox';
import { ITask } from '../../../entities/task';
import { FC } from 'react';

interface IToggleTask {
  data: ITask;
}

const ToggleTask: FC<IToggleTask> = ({ data }) => {
  const { isDone } = data;

  return <Checkbox checked={isDone} />;
};

export default ToggleTask;
