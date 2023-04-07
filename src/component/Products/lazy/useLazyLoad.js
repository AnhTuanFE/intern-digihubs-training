import { useEffect, useReducer, useCallback } from "react";
import debounce from "lodash/debounce";

const INTERSECTION_THRESHOLD = 5;
const LOAD_DELAY_MS = 500;

const reducer = (state, action) => {
  switch (action.type) {
    case "set": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "onGrabData": {
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload.data],
        currentPage: state.currentPage + 1,
      };
    }
    default:
      return state;
  }
};

const useLazyLoad = ({ triggerRef, onGrabData, options }) => {
  const [state, dispatch] = useReducer(reducer, {
    // init state là 1 object có 3 phần tử
    loading: false,
    currentPage: 1,
    data: [],
  });

  const _handleEntry = async (entry) => {
    // boundingClientRect: là hình chữ nhật bao quanh phần tử mà quan sát được,
    // được tính toán dựa trên kích thước của phần tử và vị trí của nó trong cửa sổ trình duyệt.
    const boundingRect = entry.boundingClientRect;

    //intersectionRect: Hình chữ nhật bao phủ phần tử
    //và vùng giao nhau giữa phần tử đó và viewport của trình duyệt.
    const intersectionRect = entry.intersectionRect;

    if (
      !state.loading && // nếu state.loading = false và // Phần tử đang nằm trong viewport
      entry.isIntersecting && //isIntersecting: Một giá trị boolean cho biết liệu phần tử đang giao nhau với viewport hay không.
      intersectionRect.bottom - boundingRect.bottom <= INTERSECTION_THRESHOLD
      // đẩy nó xuống 5
    ) {
      // gọi action có type = set và truyền payload có loading = true
      dispatch({ type: "set", payload: { loading: true } });
      // gọi hàm onGrabData truyền cho nó pages hiện tại
      // nó sẽ tính toán và trả về dữ liệu
      const data = await onGrabData(state.currentPage);
      // sau khi onGrabData trả về data, gọi action có type = onGrabData
      // và truyền cho payload là cái data nhận được
      dispatch({ type: "onGrabData", payload: { data } });
    }
  };

  // dùng debounce để delay thực hiện hàm _handleEntry trong 0,5 giây
  const handleEntry = debounce(_handleEntry, LOAD_DELAY_MS);

  const onIntersect = useCallback(
    (entries) => {
      handleEntry(entries[0]);
    },
    [handleEntry]
  );

  useEffect(() => {
    if (triggerRef.current) {
      // phần tử loadingPosts đã truyền  vào
      const container = triggerRef.current;
      // tạo 1 đối tượng IntersectionObserver
      const observer = new IntersectionObserver(onIntersect, options);

      // dùng IntersectionObserver quan sát phẩn tử container
      observer.observe(container);

      //   cleanup function giúp ngừng quan sát phần tử hiện tại
      return () => {
        observer.disconnect();
      };
    }
  }, [triggerRef, onIntersect, options]);

  return state;
};

export default useLazyLoad;
