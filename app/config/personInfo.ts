import { PersonalInfoType } from "@/types/personal-info";
import { IoCodeSlash } from "react-icons/io5";
import { LuLightbulb } from "react-icons/lu";
import { IoMdMale } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa6";

export const PERSONAL_INFO: PersonalInfoType[] = [
  {
    icon: IoCodeSlash,
    title: "Domain",
    information: "Full stack and devops engineer",
  },
  {
    icon: FaLocationArrow,
    title: "Location",
    information: "New Delhi, India",
  },
  {
    icon: MdEmail,
    title: "Email",
    information: "agayush088@gmail.com",
    href: "agayush088@gmail.com",
  },
  {
    icon: RiPhoneFill,
    title: "Schedule a Meet",
    information: "Calendly",
    href: "https://calendly.com/agayush088/30min",
  },
];
