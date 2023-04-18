import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";

import DefaulLayout from "./layouts/DefaulLayout";
import RouteConfirmation from "./routes/RouteConfirmation";
import "./App.css";

// const LazyProducts = React.lazy(() => import("./component/Products"));

function App() {
  return (
    //           <Route
    //             path="/products"
    //             element={
    //               <React.Suspense fallback={<div>Loading products...</div>}>
    //                 <LazyProducts />
    //               </React.Suspense>
    //             }
    //           />
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = DefaulLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}

        {privateRoutes.map((route, index) => {
          let Layout = DefaulLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          const Page = route.component;
          return (
            <Route element={<RouteConfirmation />}>
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            </Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
