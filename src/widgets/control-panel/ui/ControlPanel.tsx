import { ClearCompleted } from '../../../features/clear-completed';
import FilterTask from '../../../features/filter-tasks/ui/FilterTasks';
import { FC } from 'react';
import styles from './ControlPanel.module.css';
import { Box, Typography } from '@mui/material';

const TotoList: FC = () => {
  return (
    <Box className={styles.box}>
      <Typography component="caption" className={styles.caption}>
        X items left
      </Typography>
      <FilterTask />
      <ClearCompleted />
    </Box>
  );
};

export default TotoList;
