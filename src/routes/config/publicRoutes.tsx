import About from "@/pages/about/About";
import Home from "@/pages/home/Home";
import { Route } from "@/types/common";

export const publicRoutes: Route[] = [
  {
    path: "/",
    component: <Home />,
    name: "Trang chủ",
  },
  {
    path: "/gioi-thieu",
    component: <About />,
    name: "Giới thiệu",
  },
  {
    path: "/khao-sat-da",
    name: "Khảo sát da",
  },
  {
    path: "/san-pham",
    name: "Sản phẩm",
  },
  {
    path: "/blog",
    name: "Blog",
  },
];
