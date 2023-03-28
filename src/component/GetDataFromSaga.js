import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListPost as getListPostAction } from "../reduxSaga/action";

function GetDataFromSaga() {
  const dispatch = useDispatch();
  const listPosts = useSelector((state) => state.posts);
  const { posts, load } = listPosts;
  useEffect(() => {
    dispatch(getListPostAction());
  }, []);
  const handleRenderNotify = () => {
    if (load) {
      return <h1>Data is loading from API...</h1>;
    } else {
      return (
        <>
          <h1>List Post</h1>
          <table>
            <tbody>
              <tr>
                <th>Id</th>
                <th>Title</th>
              </tr>
              {posts.map((post) => (
                <tr>
                  <th>{post.id}</th>
                  <th>{post.title}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }
  };
  return <div>{handleRenderNotify()}</div>;
}

export default GetDataFromSaga;
