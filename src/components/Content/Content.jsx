import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
// import NoContentMessage from "./NoContentMessage";
import Post from "../Post";

const Posts = styled.div`
  box-sizing: border-box;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export default function Content() {
  const posts = useSelector((store) => store.posts);
  console.log(posts);

  return (
    <>
      {posts.length === 0 ? (
        <div>沒有訊息</div>
      ) : (
        <Posts>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Posts>
      )}
    </>
  );
}
