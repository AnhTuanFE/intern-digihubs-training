import HeaderStudio from "./HeaderStudio";
function HeaderStudioLayout({ children }) {
  return (
    <div style={{ margin: "0 10%" }}>
      <HeaderStudio />
      <div>{children}</div>
    </div>
  );
}

export default HeaderStudioLayout;
