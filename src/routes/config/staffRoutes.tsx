import ManageProducts from "@/pages/ManageProducts";
import { Route } from "@/types/common";

export const staffRoutes: Route[] = [
  {
    path: "/quan-ly-san-pham",
    component: <ManageProducts />,
    name: "Quản lý sản phẩm",
    hidden: false,
  },
];
