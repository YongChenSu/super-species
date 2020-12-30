import { useState, useEffect, useMemo, memo } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Comment from "../../components/Comment";

const API_ENDPOINT =
  "https://student-json-api.lidemy.me/comments?_sort=createdAt&_order=desc";

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ddd;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = styled.div`
  color: lightsalmon;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem 0;
`;

const Title = styled.h1`
  color: #333;
`;

const MessageForm = styled.form`
  width: 100%;
  margin: 1rem 0 0 0;
`;

const MessageTextarea = styled(TextareaAutosize)`
  box-sizing: border-box;
  width: 100%;
`;

const SubmitButton = styled(Button)``;

const CommentList = styled.div`
  margin: 1rem 0 0 0;
`;

const BoardPage = () => {
  const [comments, setComments] = useState(null);
  const [commentApiError, setCommentApiError] = useState(null);
  const [value, setValue] = useState();
  const [postMessageError, setPostMessageError] = useState();
  const [isLoadingPostMessage, setIsLoadingPostMessage] = useState(false);

  const fetchComments = () => {
    return fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        setCommentApiError(error.message);
      });
  };

  const handleDeleteData = (id) => {
    fetch(`https://student-json-api.lidemy.me/comments/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => fetchComments());
  };

  const handleTextareaFocus = (e) => {
    setPostMessageError(null);
  };

  const handleTextareaChange = (e) => {
    setValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isLoadingPostMessage) return;
    setIsLoadingPostMessage(true);

    fetch("https://student-json-api.lidemy.me/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nickname: "yongchen",
        body: value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoadingPostMessage(false);
        if (data.ok === 0) {
          setPostMessageError(data.message);
        } else {
          setValue("");
          fetchComments();
        }
      })
      .catch((error) => {
        setIsLoadingPostMessage(false);
        setPostMessageError(error.message);
      });
  };

  useEffect(fetchComments, []);

  return (
    <>
      {isLoadingPostMessage && <Loading>Loading ...</Loading>}

      <Title>留言板</Title>

      <MessageForm onSubmit={handleFormSubmit}>
        <MessageTextarea
          aria-label="minimum height"
          rowsMin={10}
          placeholder="Minimum 3 rows"
          value={value}
          onFocus={handleTextareaFocus}
          onChange={handleTextareaChange}
        />
        <Grid container direction="row" justify="flex-end" alignItems="stretch">
          <SubmitButton type="submit" variant="outlined" color="primary">
            送出
          </SubmitButton>
        </Grid>
        {postMessageError && <ErrorMessage>{postMessageError}</ErrorMessage>}
      </MessageForm>
      {commentApiError && (
        <ErrorMessage>
          Something went wrong!
          <br></br>
          {commentApiError.toString()}
        </ErrorMessage>
      )}
      {comments && comments.length === 0 && <div>No message</div>}
      <CommentList>
        {comments &&
          comments.map((message) => (
            <Comment
              key={message.id}
              id={message.id}
              author={message.nickname}
              time={new Date(message.createdAt).toLocaleString()}
              children={message.body}
              handleDeleteData={handleDeleteData}
            ></Comment>
          ))}
      </CommentList>
    </>
  );
};

export default memo(BoardPage);
