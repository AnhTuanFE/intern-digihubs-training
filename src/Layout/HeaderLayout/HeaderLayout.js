import UseHeader from "../componenLayout/Header";
function HeaderLayout({ children }) {
  return (
    <div>
      <UseHeader />
      <div>{children}</div>
    </div>
  );
}

export default HeaderLayout;
