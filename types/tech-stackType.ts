import { IconType } from "react-icons/lib";

export interface TechStack {
  icon: string | IconType;
  title: string;
  href: string;
  categories: string[];
}
