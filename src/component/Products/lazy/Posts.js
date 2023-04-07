import { useRef, memo } from "react";
import clsx from "clsx";
import useLazyLoad from "./useLazyLoad";
import { Card } from "./Card";
import { LoadingPosts } from "./LoadingPosts";
import posts from "./data.json";

// có 17 hình và mỗi trang có 6 hình => mỗi trang 3 hình
const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 3;

const Posts = () => {
  //  lấy dữ liệu của image (hình và tên tác giả) từ data.json
  const images = posts["data"];
  // tạo 1 ref và gán nó vào thẻ div của loading
  const triggerRef = useRef(null);

  // 1 hàm nhận vào 1 trang hiện tại và tiến hành
  //trả về dữ liệu của 6 phần tử tiếp theo
  const onGrabData = (currentPage) => {
    // nơi này là nơi chúng ta có thể gọi API
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = images.slice(
          ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
          NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
        );
        console.log(data);
        resolve(data);
      }, 3000);
    });
  };
  // truyền cho nó 1 ref và 1 hàm trả về dữ liệu
  // và lấy về data và loading nó trả về
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

  return (
    <>
      <div className="grid grid-cols-3 gap-4 content-start">
        {data.map((image) => {
          return <Card owner={image["owner"]} imageUrl={image["imageUrl"]} />;
        })}
      </div>
      <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
        <LoadingPosts />
      </div>
    </>
  );
};

export default memo(Posts);
