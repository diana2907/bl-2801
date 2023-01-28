import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',

  initialState: { items: [] },

  reducers: {
    addTodo(state, action) {
      state.items = [...state.items, action.payload];
      console.log('action', action);
    },
    deleteTodo(state, action) {},
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
