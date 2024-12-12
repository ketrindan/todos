import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FC, useContext } from 'react';
import { ToggleTask } from '../../../features/toggle-task';
import { filterType, Task } from '../../../entities/task';
import styles from './TodoList.module.css';
import { TasksContext } from '../../../shared/context';
import { Typography } from '@mui/material';

const TotoList: FC = () => {
  const { state } = useContext(TasksContext);

  const tasksToShow =
    state?.filter === filterType.ALL ? state.tasks : state?.filteredTasks;

  if (tasksToShow === undefined || tasksToShow.length === 0) {
    return (
      <Typography>
        You have no{' '}
        {state?.filter !== filterType.ALL && `${state?.filter.toLowerCase()}`}{' '}
        tasks so far
      </Typography>
    );
  }

  return (
    <List disablePadding dense className={styles.list}>
      {tasksToShow.map((task) => {
        return (
          <ListItem key={task.id} className={styles.listItem} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ToggleTask data={task} />
              </ListItemIcon>
              <ListItemText primary={<Task data={task} />} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TotoList;
