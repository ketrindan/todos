import './App.css';
import { Main } from '../pages/main';
import { TasksContext, ContextState } from '../shared/context';
import { useReducer } from 'react';
import { Action, State, tasksReducer } from '../entities/task';
import { StyledEngineProvider } from '@mui/material';
import { initialState } from './state';

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
