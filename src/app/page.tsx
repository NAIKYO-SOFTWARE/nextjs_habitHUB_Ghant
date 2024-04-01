import Link from "next/link";

function Introduce() {
  return (
    <div className="w-full min-h-screen relative ">
      <h1 className="text-[40px] w-[200px] absolute left-[40%] top-[10%] text-[black] font-bold">
        Do your tasks quickly and easy
      </h1>
      <p className="absolute left-[38%] top-[40%] text-[black]">
        Your tasks, your rules, our support
      </p>
      <div className="absolute left-[45%] top-[50%]">
        <Link
          href="/login"
          className="bg-blue2 text-gray-dark px-6 py-3 rounded-lg shadow-md hover:bg-blue transition-colors duration-300"
        >
          Login
        </Link>
      </div>

      <Link
        href={"/home"}
        className=" absolute left-[43%] top-[57%] text-[black] underline hover:text-[rgb(142,_130,_116)]"
      >
        Create an account
      </Link>
    </div>
  );
}

export default Introduce;
