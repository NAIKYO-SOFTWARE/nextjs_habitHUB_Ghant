"use client";

import {
  removeTodo,
  selectTodoList,
} from "../../../lib/features/todos/todoSlice";
import "../../style/components/todo.css";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

interface Todo {
  content: string;
  icon: string;
  background: string;
  id: string;
}

function Todo() {
  const dispatch = useAppDispatch();
  const todoListData = useAppSelector(selectTodoList);
  let handleClearTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  return todoListData.todoList[0] == null ? (
    <div id="no_todo">No todo</div>
  ) : (
    todoListData.todoList.map((todo: any) => {
      return (
        <div
          key={todo.id}
          className="div"
          style={{ backgroundColor: todo.background }}
        >
          <div className="div-2">
            <div className="div-3">{todo.icon}</div>
            <div className="div-4">{todo.content}</div>
          </div>
          <input
            id="checkbox_todo"
            type="checkbox"
            onClick={() => handleClearTodo(todo.id)}
          />
        </div>
      );
    })
  );
}

export default Todo;
