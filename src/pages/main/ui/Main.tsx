import { FC } from 'react';
import { Header } from '../../../widgets/header';
import { PageLayout } from '../../../shared/page-layout';
import { AddTask } from '../../../features/add-task';
import { ContentContainer } from '../../../shared/content-container';
import { TodoList } from '../../../widgets/todo-list';
import { ControlPanel } from '../../../widgets/control-panel';

const test = [
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
];

const Main: FC = () => {
  return (
    <PageLayout>
      <Header />
      <ContentContainer>
        <AddTask />
        <TodoList data={test} />
        <ControlPanel />
      </ContentContainer>
    </PageLayout>
  );
};

export default Main;
