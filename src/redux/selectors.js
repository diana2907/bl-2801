import { createSelector } from '@reduxjs/toolkit';

export const getTodosState = state => state.todos.items;
export const getFilter = state => state.filter;

export const getVisibleTodos = createSelector(
  [getTodosState, getFilter],
  (todos, filter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
