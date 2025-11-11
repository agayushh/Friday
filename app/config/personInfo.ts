import { PersonalInfoType } from "@/types/personal-info";
import { IoCodeSlash } from "react-icons/io5";
import { LuLightbulb } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { IoMdMale } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";

export const PERSONAL_INFO: PersonalInfoType[] = [
  {
    icon: IoCodeSlash,
    title: "Domain",
    information: "Full stack and devops engineer",
  },
  {
    icon: LuLightbulb,
    title: "Currently",
    information: "Creating Oclea",
    href: "https://oclea.app",
  },
  {
    icon: MdEmail,
    title: "Email",
    information: "agayush088@gmail.com",
    href: "agayush088@gmail.com",
  },
  {
    icon: RiPhoneFill,
    title: "Contact",
    information: "+91 9560147344",
  },
  {
    icon: CiGlobe,
    title: "Portfolio",
    information: "agayush.me",
    href: "https://agayush.me",
  },
  {
    icon: IoMdMale,
    title: "Gender",
    information: "he/him",
  },
];
