import React from "react";
const LazyProducts = React.lazy(() => import("../../pages/products"));
// function LazyLoadPage({ children }) {
function LazyLoadPage() {
  return (
    // <React.Suspense fallback={<div>Loading...</div>}>{children}</React.Suspense>
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyProducts />
      </React.Suspense>
    </div>
  );
}

export default LazyLoadPage;
