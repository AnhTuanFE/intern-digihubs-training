// import React from "react";
// const LazyProducts = React.lazy(() => import("../component/Products"));

import Home from "../component/Home";
import AddProduct from "../component/AddProduct";
import DetailProducts from "../component/DetailProducts";
import UpdateProduct from "../component/UpdateProduct";
import Login from "../component/Login";
import Posts from "../component/LazyLoadImages/Posts";
import Products from "../component/Products";
import AccountInformation from "../component/AccountInformation";
import StudioDesign from "../pages/StudioDesign";
import HeaderLayout from "../Layout/HeaderLayout/HeaderLayout";
import HeaderStudioLayout from "../pages/StudioDesign/HeaderStudio/HeaderStudioLayout";
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
