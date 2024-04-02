import { RootState } from "@/lib/store";
import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const storedTodoList =
  typeof window !== "undefined" ? window.localStorage.getItem("todoList") : [];

const initialState = {
  todoList:
    typeof storedTodoList === "string" ? JSON.parse(storedTodoList) : [],
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const id = uuidv4();
      state.todoList.push({ ...action.payload, id });
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
    removeTodo: (state, action) => {
      const todos = [...current(state.todoList)];
      let newTodoList = todos.filter((todo) => todo.id !== action.payload);
      state.todoList = newTodoList;
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;
export const selectTodoList = (state: RootState) => state.todoList;
export default todoSlice.reducer;
