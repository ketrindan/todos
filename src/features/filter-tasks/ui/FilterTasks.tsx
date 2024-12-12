import { ToggleBtn } from '../../../shared/toggle-button';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { FC, useCallback, useContext } from 'react';
import { TasksContext } from '../../../shared/context';
import { ActionType, filterType } from '../../../entities/task';

const buttons = [
  {
    name: filterType.ALL,
  },
  {
    name: filterType.ACTIVE,
  },
  {
    name: filterType.COMPLETED,
  },
];

const FilterTasks: FC = () => {
  const { state, changeState } = useContext(TasksContext);

  const filterTasks = useCallback(
    (event: React.MouseEvent<HTMLElement>, filter: filterType) => {
      changeState && changeState({ type: ActionType.FILTER, payload: filter });
    },
    [changeState]
  );

  return (
    <ToggleButtonGroup value={state?.filter} onChange={filterTasks} exclusive>
      {buttons.map((btn) => {
        return <ToggleBtn key={btn.name} name={btn.name} />;
      })}
    </ToggleButtonGroup>
  );
};

export default FilterTasks;
