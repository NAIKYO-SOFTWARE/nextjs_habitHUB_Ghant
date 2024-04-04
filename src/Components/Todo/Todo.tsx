"use client";

import { removeTodo, selectTodoList } from "../../lib/features/todos/todoSlice";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

interface Todo {
  title: string;
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
    <div className="fixed top-[40%] left-[45%] text-gray-dark font-bold whitespace-nowrap text-3xl">
      No Todo
    </div>
  ) : (
    todoListData.todoList.map((todo: any) => {
      return (
        <div
          key={todo.id}
          className="rounded-[12px] flex w-[500px] gap-[20px] text-[#000] font-normal whitespace-nowrap justify-between px-[16px] py-[18px] m-[5px]"
          style={{ backgroundColor: todo.background }}
        >
          <div className="flex gap-[8px]">
            <div className="tracking-[-0.24px] [font:24px/83%_Material_Icons,_-apple-system,_Roboto,_Helvetica,_sans-serif]">
              {todo.icon}
            </div>
            <div className="mx-[0] my-[auto] [font:14px_Poppins,_sans-serif] font-bold">
              {todo.title}
            </div>
          </div>
          <input
            className="width: 24px; height: 24px;"
            type="checkbox"
            onClick={() => handleClearTodo(todo.id)}
          />
        </div>
      );
    })
  );
}

export default Todo;
