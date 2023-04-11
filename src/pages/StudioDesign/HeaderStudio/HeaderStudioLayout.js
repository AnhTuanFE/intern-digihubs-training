import HeaderStudio from "./HeaderStudio";
function HeaderStudioLayout({ children }) {
  return (
    <div>
      <HeaderStudio />
      <div>{children}</div>
    </div>
  );
}

export default HeaderStudioLayout;
