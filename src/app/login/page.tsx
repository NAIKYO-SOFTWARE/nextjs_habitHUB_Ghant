"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { addUser } from "@/lib/features/users/userSlice";
import { useAppDispatch } from "@/lib/hooks";
import Button from "../../Components/Button/Button";

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
      <input
        type="text"
        id="fieldName"
        className="h-[45px] w-[450px] bg-[aliceblue] text-[black] pl-[5px] mx-auto mt-10 rounded-lg"
        placeholder="Username..."
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <input
        type="password"
        id="fieldPass"
        className="h-[45px] w-[450px] bg-[aliceblue] text-[black] pl-[5px] mx-auto mt-4 rounded-lg"
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
