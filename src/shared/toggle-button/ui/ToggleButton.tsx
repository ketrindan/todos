import { FC } from 'react';
import styles from './ToggleButton.module.css';
import ToggleButton from '@mui/material/ToggleButton';

interface IToggleButton {
  name: string;
}

const ToggleBtn: FC<IToggleButton> = ({ name }) => {
  return (
    <ToggleButton value={name} className={styles.button}>
      {name}
    </ToggleButton>
  );
};

export default ToggleBtn;
