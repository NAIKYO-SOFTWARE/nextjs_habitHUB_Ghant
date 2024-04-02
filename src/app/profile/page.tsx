"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import LayoutFooter from "../Layout/index";
import "../style/views/profile.css";

function Profile() {
  let router = useRouter();
  return (
    <LayoutFooter>
      <div className="profile_container">
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
        {/* <button
          className="btn_logout"
          onClick={() => {
            localStorage.removeItem("userInfo");
            router.push("/");
          }}
        ></button> */}
      </div>
    </LayoutFooter>
  );
}

export default Profile;
