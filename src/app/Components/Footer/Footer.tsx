"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import "../../style/components/footer.css";

function Footer() {
  const router = useRouter();

  const handleClickCalendar = () => {
    router.push("/home");
  };
  const handleClickChecklist = () => {
    router.push("/home");
  };
  const handleClickUser = () => {
    router.push("/profile");
  };
  return (
    <div className="footer-container">
      <div>
        <Image
          src="/icon/calendar.png"
          className="icon-footer"
          onClick={handleClickCalendar}
          alt="Calendar"
          width={32}
          height={32}
        />
      </div>
      <div>
        <Image
          src="/icon/checklist.png"
          className="icon-footer"
          onClick={handleClickChecklist}
          alt="Checklist"
          width={32}
          height={32}
        ></Image>
      </div>
      <div>
        <Image
          src="/icon/user.png"
          className="icon-footer"
          onClick={handleClickUser}
          alt="Profile"
          width={32}
          height={32}
        ></Image>
      </div>
    </div>
  );
}

export default Footer;
