import About from "@/pages/about/About";
import Blog from "@/pages/blog/Blog";
import Home from "@/pages/home/Home";
import Products from "@/pages/products/Products";
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
    component: <Products />,
    name: "Sản phẩm",
  },
  {
    path: "/blog",
    component: <Blog />,
    name: "Blog",
  },
];
