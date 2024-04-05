"use client";

import RoundButton from "@/Components/Button/RoundButton";
import Input from "@/Components/Input/Input";
import { useRouter } from "next/navigation";

const AddTodo = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-20 h-20 fill-yellow-300 text-yellow-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </div>
        <h2 className="text-black">New Task</h2>
        <RoundButton
          className="fixed top-[5%] right-[5%]"
          onClick={() => {
            router.push("/suggest");
          }}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
              fill="#000000"
            />
          </svg>
        </RoundButton>
      </div>
      <div>
        <Input
          type="text"
          className="mt-10"
          placeholder="Name your new task"
        ></Input>
        <Input type="text" className="mt-5" placeholder="Describe it"></Input>
      </div>
      <div>
        <h3 className="text-black mt-6">Card Color</h3>
        <div>
          <input type="radio" id="html" name="bg_color" value="HTML" />
          <input type="radio" id="css" name="bg_color" value="CSS" />
          <input type="radio" id="jt" name="bg_color" value="Jt" />
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
