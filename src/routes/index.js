import React from "react";
import Home from "../component/Home/Home";
import AddProduct from "../component/AddProduct/AddProduct";
import DetailProducts from "../component/DetailProducts";
import UpdateProduct from "../component/UpdateProduct/UpdateProduct";
import Login from "../component/Login/Login";
import Posts from "../component/LazyLoadImages/Posts";
import Products from "../component/Products/Products";
import AccountInformation from "../component/AccountInformation/AccountInformation";
import HeaderLayout from "../Layout/HeaderLayout/HeaderLayout";
import StudioDesign from "../StudioDesign/StudioDesign";
import HeaderStudioLayout from "../StudioDesign/HeaderStudio/HeaderStudioLayout";
const LazyProducts = React.lazy(() => import("../component/Products"));

// layout
const publicRoutes = [
  { path: "/", component: Home, layout: HeaderLayout },
  {
    path: "/products",
    // lazy: true,
    component: Products,
    layout: HeaderLayout,
  },
  {
    path: "/detaiproduct/:id",
    component: DetailProducts,
    layout: HeaderLayout,
  },
  { path: "/addproduct", component: AddProduct, layout: HeaderLayout },
  {
    path: "/updateproduct/:id",
    component: UpdateProduct,
    layout: HeaderLayout,
  },
  { path: "/login", component: Login, layout: HeaderLayout },
  { path: "/imagepost", component: Posts, layout: HeaderLayout },
  { path: "/studio", component: StudioDesign, layout: HeaderStudioLayout },
];
const privateRoutes = [
  {
    path: "/accountinformation",
    component: AccountInformation,
    layout: HeaderLayout,
  },
];

export { publicRoutes, privateRoutes };
