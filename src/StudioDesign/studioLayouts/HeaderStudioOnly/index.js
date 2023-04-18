import HeaderStudio from "../componentsStudio/HeaderStudio";
function HeaderStudioOnly({ children }) {
  return (
    <div style={{ margin: "0 5%" }}>
      <HeaderStudio />
      <div>{children}</div>
    </div>
  );
}

export default HeaderStudioOnly;
