"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Header from "../../Components/Header/Header";
import LayoutFooter from "../Layout/index";
import RoundButton from "../../Components/Button/RoundButton";
const Todo = dynamic(() => import("../../Components/Todo/Todo"), {
  ssr: false,
});

function Home() {
  let router = useRouter();
  return (
    <LayoutFooter>
      <Header></Header>
      <div className="p-[2em] h-3/4">
        <div className="fixed top-1/4 left-[30%] text-center">
          <Todo />
        </div>
        <RoundButton
          className="fixed bottom-[15%] right-[5%]"
          onClick={() => router.push("/suggest")}
        >
          +
        </RoundButton>
      </div>
    </LayoutFooter>
  );
}

export default Home;
