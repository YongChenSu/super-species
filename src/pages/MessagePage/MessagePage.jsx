import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getPosts, getPost } from "../../WebAPI";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const PostHeader = styled.div`
  width: 40%;
`;

const PostTitle = styled.div`
  font-weight: 900;
  font-size: 30px;
  margin-bottom: 15px;
`;

const CreatedAt = styled.div`
  color: #888;
  font-weight: bold;
  padding: 10px 0px;
  border-bottom: solid 1px #ddd;
`;

const PostContent = styled.div`
  padding: 15px 0px;
  border-bottom: solid 1px #ddd;
  line-height: 26px;
  color: #333;
  width: 60%;
`;

const Button = styled(Link)`
  border: solid 2px #888;
  border-radius: 20px;
  padding: 8px 10px;
  box-shadow: 5px 5px 0px #ccc;
  max-width: 100px;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    transform: translateX(-10px);
    box-shadow: 5px 5px 0px #888;
  }
`;

const PostDate = styled.div`
  color: rgba(0, 0, 0, 0.8);
`;

const PostContainer = styled(Link)`
  border-bottom: 1px solid rgba(0, 12, 34, 0.2);
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-align: justify;
  word-break: break-word;
  text-decoration: none;
`;

const PostList = ({ post }) => {
  return (
    <PostContainer id={`${post.id}`} to={`/post/${post.id}`}>
      <PostTitle id={`${post.id}`}>{post.title}</PostTitle>
      <PostDate id={`${post.id}`}>
        {new Date(post.createdAt).toLocaleString()}
      </PostDate>
    </PostContainer>
  );
};

const Post = ({ posts, post, history }) => {
  if (!post) return null;

  return (
    <Root>
      <PostHeader>
        {posts.map((post) => (
          <PostList key={post.id} post={post} />
        ))}
      </PostHeader>

      <PostContent>
        <PostTitle>{post.title}</PostTitle>
        <CreatedAt>{new Date(post.createdAt).toLocaleString()}</CreatedAt>
        <PostContent>{post.body}</PostContent>
        <Button onClick={() => history.goBack()}>上一頁</Button>
      </PostContent>
    </Root>
  );
};

export default function MessagePage() {
  let history = useHistory();
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  useEffect(() => {
    getPost(id).then((post) => setPost(post[0]));
  }, [id]);

  return (
    <>
      <Post posts={posts} post={post} history={history} />
    </>
  );
}
