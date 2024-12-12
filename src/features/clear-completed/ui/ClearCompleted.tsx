import Button from '@mui/material/Button';
import { FC, useCallback, useContext } from 'react';
import styles from './ClearCompleted.module.css';
import { TasksContext } from '../../../shared/context';
import { ActionType } from '../../../entities/task';

const ClearCompleted: FC = () => {
  const { state, changeState } = useContext(TasksContext);

  const removeCompleted = useCallback(() => {
    state &&
      changeState &&
      changeState({ type: ActionType.CLEARCOMPLETED, payload: state.tasks });
  }, [changeState, state]);

  return (
    <Button variant="text" className={styles.button} onClick={removeCompleted}>
      Clear completed
    </Button>
  );
};

export default ClearCompleted;
