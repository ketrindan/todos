import { Box, InputBase } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import styles from './AddTask.module.css';

const AddTask: FC = () => {
  const [text, setText] = useState<string>('');

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
    [setText]
  );

  return (
    <Box component="form" className={styles.inputBox}>
      <InputBase
        className={styles.input}
        id="text-input"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleChange}
      />
    </Box>
  );
};

export default AddTask;
