import { Container, Header, SearchForm, Section, Text } from 'components';
import { useSelector } from 'react-redux';
import { TodosList } from '../TodosList/TodosList';
import { getTodosState } from '../../redux/selectors';

export function App() {
  const todos = useSelector(getTodosState);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && <Text textAlign="center">There are no any todos ... </Text>}

          <TodosList />
        </Container>
      </Section>
    </>
  );
}
