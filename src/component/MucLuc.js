// function MucLuc() {
//     return (  );
// }

// export default MucLuc;
import { Pagination } from "antd";
const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
};
const MucLuc = () => (
  <>
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
  </>
);
export default MucLuc;
