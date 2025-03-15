import ManageBrands from "@/pages/ManageBrands";
import ManageCategories from "@/pages/ManageCategories";
import ManageProducts from "@/pages/ManageProducts";
import ManageQuestions from "@/pages/ManageQuestions";
import ManageSkinTypes from "@/pages/ManageSkinTypes";
import { Route } from "@/types/common";

export const staffRoutes: Route[] = [
  {
    path: "/quan-ly-san-pham",
    component: <ManageProducts />,
    name: "Sản phẩm",
    hidden: false,
  },
  {
    path: "/quan-ly-danh-muc",
    component: <ManageCategories />,
    name: "Danh mục",
    hidden: false,
  },
  {
    path: "/quan-ly-thuong-hieu",
    component: <ManageBrands />,
    name: "Thương hiệu",
    hidden: false,
  },
  {
    path: "/quan-ly-cau-hoi",
    component: <ManageQuestions />,
    name: "Câu hỏi",
    hidden: false,
  },
  {
    path: "/quan-ly-loai-da",
    component: <ManageSkinTypes />,
    name: "Loại da",
    hidden: false,
  },
];
