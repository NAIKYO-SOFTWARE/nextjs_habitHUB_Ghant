"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Header from "../../Components/Header/Header";
import LayoutFooter from "../Layout/index";
import Button from "../../Components/Button/Button";
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
        <Button
          className="bg-blue-500 text-white border-2 border-black border-solid rounded-full fixed bottom-[15%] right-[5%] w-[50px] h-[50px] text-[30px] hover:bg-blue-300"
          type="button"
          onClick={() => router.push("/suggest")}
        >
          +
        </Button>
      </div>
    </LayoutFooter>
  );
}

export default Home;
