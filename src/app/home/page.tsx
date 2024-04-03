"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Header from "../Components/Header/Header";
import LayoutFooter from "../Layout/index";
import "../style/views/home.css";
const Todo = dynamic(() => import("../Components/Todo/Todo"), {
  ssr: false,
});

function Home() {
  let router = useRouter();
  return (
    <LayoutFooter>
      <Header></Header>
      <div className="card">
        <div className="todo-list">
          <Todo />
        </div>
        <button
          className="btn-add-checklist"
          onClick={() => router.push("/suggest")}
        >
          +
        </button>
      </div>
    </LayoutFooter>
  );
}

export default Home;
