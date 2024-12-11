import Typography from '@mui/material/Typography';
import { FC } from 'react';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <Typography
      variant="h1"
      align="center"
      color="#1976d2"
      className={styles.title}
    >
      todos
    </Typography>
  );
};

export default Header;
