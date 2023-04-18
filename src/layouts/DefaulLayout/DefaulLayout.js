import { memo } from "react";
import UseHeader from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";

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
