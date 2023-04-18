import UseHeader from "../layoutComponents/Header";
function HeaderOnly({ children }) {
  return (
    <div>
      <UseHeader />
      <div>{children}</div>
    </div>
  );
}

export default HeaderOnly;
