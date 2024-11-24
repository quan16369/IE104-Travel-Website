import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const menuMediaData = [
  {
    name: "Search",
    icon: faMagnifyingGlass,
  },
  {
    name: "Facebook",

    href: "https://facebook.com/",
    target: "_blank",
    icon: faFacebook,
  },
  {
    name: "Youtube",
    href: "https://youtube.com/",
    target: "_blank",
    icon: faYoutube,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/",
    target: "_blank",
    icon: faTwitter,
  },
  {
    name: "Tiktok",
    href: "https://tiktok.com/",
    target: "_blank",
    icon: faTiktok,
  },
  {
    name: "User",
    icon: faUser,
  },
];
