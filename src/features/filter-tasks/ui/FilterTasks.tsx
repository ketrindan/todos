import { ToggleBtn } from '../../../shared/toggle-button';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { FC } from 'react';

const buttons = [
  {
    name: 'All',
  },
  {
    name: 'Active',
  },
  {
    name: 'Completed',
  },
];

const FilterTask: FC = () => {
  return (
    <ToggleButtonGroup>
      {buttons.map((btn) => {
        return <ToggleBtn key={btn.name} name={btn.name} />;
      })}
    </ToggleButtonGroup>
  );
};

export default FilterTask;
