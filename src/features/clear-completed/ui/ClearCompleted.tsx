import Button from '@mui/material/Button';
import { FC, useContext } from 'react';
import styles from './ClearCompleted.module.css';
import { TasksContext } from '../../../shared/context';
import { ActionType, ITask } from '../../../entities/task';

const ClearCompleted: FC = () => {
  const { state, changeState } = useContext(TasksContext);

  const removeCompleted = (tasks: ITask[] | undefined) => {
    tasks &&
      changeState &&
      changeState({ type: ActionType.CLEARCOMPLETED, payload: tasks });
  };

  return (
    <Button
      variant="text"
      className={styles.button}
      onClick={() => removeCompleted(state?.tasks)}
    >
      Clear completed
    </Button>
  );
};

export default ClearCompleted;
