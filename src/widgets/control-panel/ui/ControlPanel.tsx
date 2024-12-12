import { ClearCompleted } from '../../../features/clear-completed';
import FilterTask from '../../../features/filter-tasks/ui/FilterTasks';
import { FC, useContext } from 'react';
import styles from './ControlPanel.module.css';
import { Box, Typography } from '@mui/material';
import { TasksContext } from '../../../shared/context';
import { countUncompleted } from '../../../entities/task';

const ControlPanel: FC = () => {
  const { state } = useContext(TasksContext);
  const unCompleted = state && countUncompleted(state.tasks);

  return (
    <Box className={styles.box}>
      <Typography component="p" className={styles.caption}>
        {unCompleted} items left
      </Typography>
      <FilterTask />
      <ClearCompleted />
    </Box>
  );
};

export default ControlPanel;
