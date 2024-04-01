// import Button from "../Components/Button/Button";
import Link from "next/link";
import "../style/beforeLogin.css";

function BeforeLoginView() {
  return (
    <div>
      <h1 className="h1-before-login">Do your </h1>
      <h1 className="h1-before-login">tasks </h1>
      <h1 className="h1-before-login">quickly </h1>
      <h1 className="h1-before-login">and easy</h1>
      <p>Your tasks, your rules, our support</p>
      <Link href="/profile">
        <button>Login</button>
      </Link>
      <br />
      <Link href={"/"}>Create an account</Link>
    </div>
  );
}

export default BeforeLoginView;
