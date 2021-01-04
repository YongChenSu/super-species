import React, { memo } from "react";
import Container from "../../components/Container";
import CommentForm from "../../components/CommentForm";
import Content from "../../components/Content";

function BoardReduxPage() {
  return (
    <Container
      maxWidthOnMobile="100vw"
      maxWidthOnDesktop="60vw"
      paddingOnMobile="8px"
      paddingOnDeskTop="16px"
      defaultBorder="true"
    >
      <CommentForm />
      <Content />
    </Container>
  );
}

export default memo(BoardReduxPage);
