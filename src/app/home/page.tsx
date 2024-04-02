"use client";

import { useRouter } from "next/navigation";
import LayoutFooter from "../Layout/index";
import Header from "../Components/Header/Header";
import "../style/views/home.css";

function Home() {
  let router = useRouter();
  const handleClickAddChecklist = () => {
    router.push("/suggest");
  };

  return (
    <LayoutFooter>
      <Header></Header>
      <div className="card">
        <div className="todo-list"></div>
        <button className="btn-add-checklist" onClick={handleClickAddChecklist}>
          +
        </button>
      </div>
    </LayoutFooter>
  );
}

export default Home;
