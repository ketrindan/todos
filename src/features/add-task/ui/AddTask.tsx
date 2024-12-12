import { Box, InputBase } from '@mui/material';
import { FC, FormEvent, useCallback, useContext, useState } from 'react';
import styles from './AddTask.module.css';
import { TasksContext } from '../../../shared/context';
import { ActionType } from '../../../entities/task';

const AddTask: FC = () => {
  const [text, setText] = useState<string>('');
  const { changeState } = useContext(TasksContext);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
    []
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    changeState && changeState({ type: ActionType.ADD, payload: text });
    setText('');
  };

  return (
    <Box component="form" className={styles.inputBox} onSubmit={onSubmit}>
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
