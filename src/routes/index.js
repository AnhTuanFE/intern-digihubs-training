import * as pages from "../pages";
import * as productPages from "../pages/products";
import HeaderOnly from "../layouts/HeaderOnly";

import StudioDesign from "../StudioDesign";
import HeaderStudioOnly from "../StudioDesign/studioLayouts/HeaderStudioOnly";
import RegisterStudio from "../StudioDesign/studioPages/RegisterStudio";
import LoginStudio from "../StudioDesign/studioPages/LoginStudio";

const publicRoutes = [
  { path: "/", component: pages.Home, layout: HeaderOnly },
  {
    path: "/products",
    component: productPages.AllProducts,

    layout: HeaderOnly,
  },
  {
    path: "/detaiproduct/:id",
    component: productPages.DetailProducts,
    layout: HeaderOnly,
  },
  {
    path: "/addproduct",
    component: productPages.AddProduct,
    layout: HeaderOnly,
  },
  {
    path: "/updateproduct/:id",
    component: productPages.UpdateProduct,
    layout: HeaderOnly,
  },
  { path: "/login", component: pages.Login, layout: HeaderOnly },
  { path: "/imagepost", component: pages.Posts, layout: HeaderOnly },

  // Studio Router
  { path: "/studio", component: StudioDesign, layout: HeaderStudioOnly },
  {
    path: "/registerstudio",
    component: RegisterStudio,
    layout: HeaderStudioOnly,
  },
  { path: "/loginstudio", component: LoginStudio, layout: HeaderStudioOnly },
];
const privateRoutes = [
  {
    path: "/accountinformation",
    component: pages.AccountInformation,
    layout: HeaderOnly,
  },
];

export { publicRoutes, privateRoutes };
