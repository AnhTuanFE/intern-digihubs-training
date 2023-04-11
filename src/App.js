import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { publicRoutes, privateRoutes } from "./routes";
import { Fragment } from "react";
import DefaulLayout from "./Layout/defaulLayout";
import RouteConfirmation from "./routes/RouteConfirmation/RouteConfirmation";
// import LazyLoadPage from "./Layout/LazyLoadPage/LazyLoadPage";
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
    <div>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              let Layout = DefaulLayout;
              let LazyPage = Fragment;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              // else if (route.lazy) {
              //   LazyPage = LazyLoadPage;
              // }
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <LazyPage>
                        <Page />
                      </LazyPage>
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
      </Router>
    </div>
  );
}

export default App;
