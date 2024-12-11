import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FC, useContext } from 'react';
import { ToggleTask } from '../../../features/toggle-task';
import { Task } from '../../../entities/task';
import styles from './TodoList.module.css';
import { TasksContext } from '../../../shared/context';

const TotoList: FC = () => {
  const { state, changeState } = useContext(TasksContext);

  return (
    <List disablePadding dense className={styles.list}>
      {state &&
        state.tasks.map((task) => {
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
