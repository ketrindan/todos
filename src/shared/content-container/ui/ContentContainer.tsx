import Box from '@mui/material/Box';
import { FC, PropsWithChildren } from 'react';
import styles from './ContentContainer.module.css';

const ContentContainer: FC<PropsWithChildren> = ({ children }) => (
  <Box className={styles.box}> {children} </Box>
);

export default ContentContainer;
