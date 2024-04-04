"use client";

import LayoutFooter from "../Layout/index";
import TodoSuggest from "../../Components/Todo/TodoSuggest";
import { addTodo } from "../../lib/features/todos/todoSlice";
import { useAppDispatch } from "@/lib/hooks";

let suggestList: TodoSuggest[] = [
  { title: "Read", icon: "📖", background: "#FFEE93" },
  { title: "Study", icon: "✏️", background: "#ADF7B6" },
  { title: "Running", icon: "🏃‍️", background: "#FFC09F" },
  { title: "Cycling", icon: "🚴‍", background: "#BDE0FE" },
];

function Suggest() {
  const dispatch = useAppDispatch();

  let handleAddTodo = (todo: TodoSuggest) => {
    dispatch(addTodo({ todo }));
    alert("Add to to-do list successfully!");
  };
  return (
    <LayoutFooter>
      <div className="fixed left-[30%] top-1/5">
        <h2 className="fixed top-[5%] left-[41%] text-gray-dark text-3xl font-bold">
          Suggestions
        </h2>
        <div className="fixed top-[20%]">
          {suggestList.map((todo, idx) => {
            return (
              <div className="flex mt-2" key={idx}>
                <TodoSuggest
                  title={todo.title}
                  icon={todo.icon}
                  background={todo.background}
                ></TodoSuggest>
                <button
                  className="bg-[#f7f3f3] rounded-[50%] w-[40px] h-[40px] text-[12px] text-[#000000] text-center font-bold ml-2 mt-2"
                  onClick={() => {
                    handleAddTodo(todo);
                  }}
                >
                  +
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </LayoutFooter>
  );
}

export default Suggest;
