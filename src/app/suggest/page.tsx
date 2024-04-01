"use client";

import LayoutFooter from "../Layout/index";
import TodoSuggest from "../../Components/Todo/TodoSuggest";
import { addTodo } from "../../lib/features/todos/todoSlice";
import { useAppDispatch } from "@/lib/hooks";
import Button from "@/Components/Button/Button";
import { useRouter } from "next/navigation";

let suggestList: TodoSuggest[] = [
  { title: "Read", icon: "📖", background: "#FFEE93" },
  { title: "Study", icon: "✏️", background: "#ADF7B6" },
  { title: "Running", icon: "🏃‍️", background: "#FFC09F" },
  { title: "Cycling", icon: "🚴‍", background: "#BDE0FE" },
];

function Suggest() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  let handleAddTodo = (todo: TodoSuggest) => {
    dispatch(addTodo({ todo }));
    alert("Add to to-do list successfully!");
  };
  return (
    <LayoutFooter>
      <div>
        <h2 className="mt-5 text-gray-dark text-3xl font-bold">Suggestions</h2>
        <div className="flex flex-col items-center justify-center gap-3 mt-16">
          {suggestList.map((todo, idx) => {
            return (
              <div className="flex gap-3" key={idx}>
                <TodoSuggest
                  title={todo.title}
                  icon={todo.icon}
                  background={todo.background}
                ></TodoSuggest>
                <button
                  className="rounded-3xl h-10 w-10 mt-2"
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
        <Button
          type="button"
          className="mt-10 h-12 w-36 rounded-xl bg-white text-black font-bold"
          onClick={() => {
            router.push("/addTodo");
          }}
        >
          Add More
        </Button>
      </div>
    </LayoutFooter>
  );
}

export default Suggest;
