"use client";

import { useRouter } from "next/navigation";
import Button from "../Components/Button/Button";
import styles from "../style/views/login.module.css";
import { useState } from "react";

function Login() {
  const router = useRouter();

  const [user, setUser] = useState("");
  return (
    <div className={styles.login_container}>
      <h3 className={styles.title}>Log in to HabitHUB</h3>
      <p className={styles.text}>
        Welcome back! Sign in using your social account or email to continue us
      </p>
      <input
        type="text"
        id="fieldName"
        className={styles.input}
        placeholder="Username..."
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <br></br>
      <input
        type="password"
        id="fieldPass"
        className={styles.input}
        placeholder="Password..."
      />
      <br></br>
      <Button
        text={"Login"}
        onClick={() => {
          router.push("/home");
        }}
      ></Button>
    </div>
  );
}

export default Login;
