import './App.css';
import { Main } from '../pages/main';
import { TasksContext, ContextState } from '../shared/context';
import { useReducer } from 'react';
import { Action, filterType, State, tasksReducer } from '../entities/task';
import { StyledEngineProvider } from '@mui/material';

const initialState: State = {
  tasks: [
    {
      id: '1',
      text: 'text turgnfb',
      isDone: true,
    },
    {
      id: '2',
      text: 'text afgjyuk',
      isDone: false,
    },
    {
      id: '3',
      text: 'text arfstgyuih',
      isDone: true,
    },
  ],
  filteredTasks: [
    {
      id: '1',
      text: 'text turgnfb',
      isDone: true,
    },
    {
      id: '2',
      text: 'text afgjyuk',
      isDone: false,
    },
    {
      id: '3',
      text: 'text arfstgyuih',
      isDone: true,
    },
  ],
  filter: filterType.ALL,
};

function App() {
  const [state, changeState] = useReducer<React.Reducer<State, Action>>(
    tasksReducer,
    initialState
  );

  const State: ContextState = {
    state,
    changeState,
  };

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <TasksContext.Provider value={State}>
          <Main />
        </TasksContext.Provider>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
