import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/reducer/postReducer";

import styled from "styled-components";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import StyledButton from "../common/StyledButton";

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const ButtonContainer = styled(Button)`
  margin-top: 20px;
  align-self: flex-end;
`;

export default function CommentForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!text) {
        console.log("empty input");
        return;
      }

      dispatch(addPost(text));
      setText("");
    },
    [dispatch, text, setText]
  );

  return (
    <InputForm>
      <TextField
        label="Please input comment..."
        multiline
        rows={4}
        value={text}
        variant="outlined"
        onChange={(e) => setText(e.target.value)}
      />
      <ButtonContainer>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </StyledButton>
      </ButtonContainer>
    </InputForm>
  );
}
