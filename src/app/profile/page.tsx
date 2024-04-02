"use client";

import { useRouter } from "next/navigation";
import LayoutFooter from "../Layout/index";
import "../style/views/profile.css";

function Profile() {
  let router = useRouter();
  return (
    <LayoutFooter>
      <div className="profile_container">
        <button
          className="btn_logout"
          onClick={() => {
            localStorage.removeItem("userInfo");
            router.push("/");
          }}
        >
          Log out
        </button>
      </div>
    </LayoutFooter>
  );
}

export default Profile;
