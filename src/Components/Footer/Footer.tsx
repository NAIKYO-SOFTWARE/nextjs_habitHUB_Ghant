"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

function Footer() {
  const router = useRouter();

  const handleClickCalendar = () => {
    router.push("/calendar");
  };
  const handleClickChecklist = () => {
    router.push("/home");
  };
  const handleClickUser = () => {
    router.push("/profile");
  };
  return (
    <div className="fixed w-full bottom-[0] left-2/4 -translate-x-1/2 h-[60px] flex items-center justify-around">
      <div>
        <Image
          src="/icon/calendar.png"
          className="w-[32px] h-[32px] hover:cursor-pointer"
          onClick={handleClickCalendar}
          alt="Calendar"
          width={32}
          height={32}
        />
      </div>
      <div>
        <Image
          src="/icon/checklist.png"
          className="w-[32px] h-[32px] hover:cursor-pointer"
          onClick={handleClickChecklist}
          alt="Checklist"
          width={32}
          height={32}
        ></Image>
      </div>
      <div>
        <Image
          src="/icon/user.png"
          className="w-[32px] h-[32px] hover:cursor-pointer"
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
