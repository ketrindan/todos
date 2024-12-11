import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FC } from 'react';
import { ToggleTask } from '../../../features/toggle-task';
import { ITask, Task } from '../../../entities/task';
import styles from './TodoList.module.css';

interface ITotoList {
  data: ITask[];
}

const TotoList: FC<ITotoList> = ({ data }) => {
  return (
    <List disablePadding dense className={styles.list}>
      {data.map((task) => {
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
