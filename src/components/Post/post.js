import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/reducer/postReducer";
import styled from "styled-components";
import { Typography, IconButton, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ReplyForm from "../ReplyForm";
import Reply from "../Reply";
import { MEDIA_QUERY_MD } from "../../constant/style";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 1rem 0;
  padding: ${(props) => props.paddingOnMobile};
  background-color: ${(props) => props.theme.color.lightGray};
  color: ${(props) => props.theme.color.darkGray};
  border-radius: 1rem;
  background-color: #cf1259;

  ${MEDIA_QUERY_MD} {
    padding: ${(props) => props.paddingOnDeskTop};
  }
`;

const FirstComment = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;

  ${MEDIA_QUERY_MD} {
    flex-direction: row;
  }
`;

const CommentText = styled.div`
  width: inherit;

  margin: 12px 0;
  padding: 0 12px;
  color: ${(props) => props.theme.color.white};
  white-space: pre-wrap;
`;

const StyledButton = styled(Button)`
  && {
    align-self: flex-end;
    color: ${(props) => props.theme.color.white};
  }
`;

const IconButtonContainer = styled.div`
  height: 100%;
  ${"" /* 設定高度以免被拉長 */}

  align-self: flex-end;

  ${MEDIA_QUERY_MD} {
    align-self: flex-start;
  }
`;

export default function Post({ post }) {
  const [inputIsShown, setInputIsShown] = useState(false);
  const { id, comment, replies } = post;
  const dispatch = useDispatch();

  const handleToggleInput = useCallback(() => {
    setInputIsShown(!inputIsShown);
  }, [inputIsShown, setInputIsShown]);

  const handleDelete = useCallback(() => {
    dispatch(deletePost(id));
  }, [dispatch, deletePost, id]);

  return (
    <PostContainer paddingOnMobile="0.5rem" paddingOnDeskTop="1rem">
      <FirstComment>
        <CommentText>
          <Typography variant="body1">{comment}</Typography>
        </CommentText>
        <IconButtonContainer onClick={handleDelete}>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </IconButtonContainer>
      </FirstComment>
      <StyledButton onClick={handleToggleInput}>
        {inputIsShown ? "關閉回覆欄位" : "回覆"}
      </StyledButton>
      {inputIsShown && <ReplyForm id={id} />}
      {replies.length > 0 &&
        replies.map((reply, index) => <Reply key={index} reply={reply} />)}
    </PostContainer>
  );
}
