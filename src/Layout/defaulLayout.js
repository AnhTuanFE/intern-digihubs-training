import { memo } from "react";
import UseHeader from "./componenLayout/Header";
import Footer from "./componenLayout/Footer";
function DefaulLayout({ children }) {
  return (
    <div className="Wrapper">
      <UseHeader />
      <div className="chilren">{children}</div>
      <Footer />
    </div>
  );
}
export default memo(DefaulLayout);
