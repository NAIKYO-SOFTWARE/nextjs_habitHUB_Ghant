"use client";

import { useState } from "react";
import { addUser } from "@/lib/features/users/userSlice";
import { useAppDispatch } from "@/lib/hooks";
import Button from "../../Components/Button/Button";
import { useRouter } from "next/navigation";
import Input from "@/Components/Input/Input";

function Login() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [user, setUser] = useState("");

  return (
    <div className="flex flex-col">
      <h3 className="text-center mt-[50px] text-[rgb(211,_94,_213)] font-bold text-[30px]">
        Log in to HabitHUB
      </h3>
      <p className="text-center mt-[20px] text-[black]">
        Welcome back! Sign in using your social account or email to continue us
      </p>
      <Input
        type="text"
        id="fieldName"
        className=" mx-auto mt-10"
        placeholder="Username..."
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <Input
        type="password"
        id="fieldPass"
        className="mx-auto mt-4"
        placeholder="Password..."
      />
      <Button
        className="bg-blue text-gray-dark rounded-lg font-bold w-[75px] h-[40px] mx-auto mt-10 hover:bg-blue2"
        type="button"
        onClick={() => {
          dispatch(addUser(user));
          router.push("/home");
        }}
      >
        Log in
      </Button>
    </div>
  );
}

export default Login;
