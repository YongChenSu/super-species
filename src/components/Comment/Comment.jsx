import { useState, useEffect, useMemo } from "react";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { fetchComments } from "../../WebAPI";
import Reply from "../Reply";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import styled from "styled-components";

const MessageForm = styled.form`
  width: 100%;
  margin: 1rem 0 0 0;
`;

const MessageTextarea = styled(TextareaAutosize)`
  box-sizing: border-box;
  width: 100%;
`;

const SubmitButton = styled(Button)``;

const MessageContainer = styled.div`
  background-color: rgb(32, 178, 170, 0.3);
  padding: 1rem;
  margin: 0 0 1rem 0;
  border-radius: 0.5rem;
`;

const MessageHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0;
  border-bottom: 2px solid rgba(32, 208, 170, 0.5);
`;

const MessageAuthor = styled.div`
  color: rgba(23, 33, 44, 0.5);
  font-size: 1rem;
`;

const MessageTime = styled.div`
  margin: 0 0 0 0.5rem;
`;

const DeleteButton = styled(Button)`
  border-radius: 0.5rem;
  padding: 0.25rem;
  color: #eee;
  background-color: rgb(105, 156, 154, 0.6);
  border: 2px solid rgb(105, 156, 154);
  cursor: pointer;
  &:hover {
    background-color: rgb(105, 156, 154, 1);
  }
  &:focus {
    outline: 0;
  }
`;

const MessageBody = styled.div`
  font-size: 1.25rem;
  padding: 0.25rem 0;
`;

const Comment = ({ handleDeleteData, id, author, time, children }) => {
  const [comments, setComments] = useState(null);
  const [messageApiError, setMessageApiError] = useState(null);
  const [value, setValue] = useState();
  const [postMessageError, setPostMessageError] = useState();
  const [isLoadingPostMessage, setIsLoadingPostMessage] = useState(false);
  const [latestComments, setLatestComments] = useState([]);

  const handleTextareaFocus = (e) => {
    setPostMessageError(null);
  };

  const handleTextareaChange = (e) => {
    setValue(e.target.value);
  };

  const handleReplySubmit = (e) => {
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
          setLatestComments([...latestComments, data]);
        }
      })
      .catch((error) => {
        setIsLoadingPostMessage(false);
        setPostMessageError(error.message);
      });
  };

  useEffect(() => {
    fetchComments()
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        setMessageApiError(error.message);
      });
  }, []);

  return (
    <>
      <MessageContainer>
        <MessageHead>
          <MessageAuthor>{author}</MessageAuthor>
          <MessageTime>{time}</MessageTime>
        </MessageHead>
        <MessageBody>
          {children}
          <DeleteButton onClick={() => handleDeleteData(id)}>刪除</DeleteButton>
          <MessageForm onSubmit={handleReplySubmit}>
            <MessageTextarea
              aria-label="minimum height"
              rowsMin={2}
              placeholder="回覆留言"
              value={value}
              onFocus={handleTextareaFocus}
              onChange={handleTextareaChange}
            />
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="stretch"
            >
              <SubmitButton type="submit" variant="outlined" color="primary">
                回覆
              </SubmitButton>
            </Grid>
          </MessageForm>
          {console.log("Comment")}
          {latestComments !== "" &&
            latestComments.map((latestComments) => (
              <Reply latestComments={latestComments} />
            ))}
        </MessageBody>
      </MessageContainer>
    </>
  );
};

export default Comment;
