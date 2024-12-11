import Button from '@mui/material/Button';
import { FC } from 'react';
import styles from './ClearCompleted.module.css';

const ClearCompleted: FC = () => {
  return (
    <Button variant="text" className={styles.button}>
      Clear completed
    </Button>
  );
};

export default ClearCompleted;
