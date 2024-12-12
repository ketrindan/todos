import { FC } from 'react';
import { Header } from '../../../widgets/header';
import { PageLayout } from '../../../shared/page-layout';
import { AddTask } from '../../../features/add-task';
import { ContentContainer } from '../../../shared/content-container';
import { TodoList } from '../../../widgets/todo-list';
import { ControlPanel } from '../../../widgets/control-panel';

const Main: FC = () => {
  return (
    <PageLayout>
      <Header />
      <ContentContainer>
        <AddTask />
        <TodoList />
        <ControlPanel />
      </ContentContainer>
    </PageLayout>
  );
};

export default Main;
