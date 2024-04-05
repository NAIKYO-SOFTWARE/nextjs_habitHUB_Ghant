"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import LayoutFooter from "../Layout/index";

function Profile() {
  let router = useRouter();
  return (
    <LayoutFooter>
      <div className="flex justify-center items-center h-screen flex-col">
        <h1>Welcome to Next.js with Material-UI</h1>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            localStorage.removeItem("userInfo");
            router.push("/");
          }}
        >
          Log out
        </Button>
      </div>
    </LayoutFooter>
  );
}

export default Profile;
