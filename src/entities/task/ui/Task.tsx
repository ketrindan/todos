import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ITask } from '../model';
import { FC, ReactNode } from 'react';
import styles from './Task.module.css';

interface ITaskItem {
  data: ITask;
  checkbox?: ReactNode;
}

const TaskItem: FC<ITaskItem> = ({ data, checkbox }) => {
  const { text, isDone } = data;
  return (
    <Box>
      {checkbox}
      <Typography className={`${styles.task} ${isDone && styles.doneTask}`}>
        {text}
      </Typography>
    </Box>
  );
};

export default TaskItem;
