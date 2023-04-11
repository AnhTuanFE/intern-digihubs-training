import React from "react";
function LazyLoadPage({ children }) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>{children}</React.Suspense>
  );
}

export default LazyLoadPage;
