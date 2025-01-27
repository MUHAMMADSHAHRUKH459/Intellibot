import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Services",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Projects",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Frontend Development",
        path: "/frontend",
        newTab: false,
      },
      {
        id: 42,
        title: "Backend Development",
        path: "/backend",
        newTab: false,
      },
      {
        id: 43,
        title: "Web Designing",
        path: "/design",
        newTab: false,
      },
      {
        id: 45,
        title: "Chatbots",
        path: "/chatbots",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
