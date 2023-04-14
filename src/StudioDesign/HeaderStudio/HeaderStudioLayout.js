import HeaderStudio from "./HeaderStudio";
function HeaderStudioLayout({ children }) {
  return (
    <div style={{ margin: "0 5%" }}>
      <HeaderStudio />
      <div>{children}</div>
    </div>
  );
}

export default HeaderStudioLayout;
