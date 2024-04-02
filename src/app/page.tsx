"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "./Components/Button/Button";
import styles from "./page.module.css";

function Introduce() {
  const router = useRouter();
  return (
    <div className={styles.introduce_container}>
      <h1 className={styles.slogan}>Do your tasks quickly and easy</h1>
      <p className={styles.sub_slogan}>Your tasks, your rules, our support</p>
      <div className={styles.btn_login}>
        <Button
          text="Login"
          onClick={() => {
            router.push("/login");
          }}
        ></Button>
      </div>
      <Link href={"/home"} className={styles.link_create_account}>
        Create an account
      </Link>
    </div>
  );
}

export default Introduce;
