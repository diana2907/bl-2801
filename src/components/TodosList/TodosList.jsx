import { useSelector } from 'react-redux';
import { Grid, GridItem, Todo } from 'components';
import { getVisibleTodos } from 'redux/selectors';

export const TodosList = () => {
  const todos = useSelector(getVisibleTodos);

  return (
    <Grid>
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo id={todo.id} text={todo.text} counter={index + 1} />
          </GridItem>
        ))}
    </Grid>
  );
};
