"use client";

import LayoutFooter from "../Layout/index";
import TodoSuggest from "../Components/Todo/TodoSuggest";
import "../style/views/suggest.css";

function Suggest() {
  let handleAddTodo = (todo: TodoSuggest) => {
    alert("Add to to-do list successfully!");
  };

  let suggestList: TodoSuggest[] = [
    { content: "Read", icon: "📖", background: "#FFEE93" },
    { content: "Study", icon: "✏️", background: "#ADF7B6" },
    { content: "Running", icon: "🏃‍️", background: "#FFC09F" },
    { content: "Cycling", icon: "🚴‍", background: "#BDE0FE" },
  ];
  return (
    <LayoutFooter>
      <div className="suggest_container">
        <h2 id="suggest_title">Suggestions</h2>
        {suggestList.map((todo, idx) => {
          return (
            <div style={{ display: "flex", alignItems: "center" }} key={idx}>
              <TodoSuggest
                content={todo.content}
                icon={todo.icon}
                background={todo.background}
              ></TodoSuggest>
              <button
                className="addButton"
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
    </LayoutFooter>
  );
}

export default Suggest;
