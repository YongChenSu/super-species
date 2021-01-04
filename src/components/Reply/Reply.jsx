// import styled from "styled-components";

// const MessageHead = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0.25rem 0;
//   border-bottom: 2px solid rgba(32, 208, 170, 0.5);
// `;

// const MessageAuthor = styled.div`
//   color: rgba(23, 33, 44, 0.5);
//   font-size: 1rem;
// `;

// const MessageTime = styled.div`
//   margin: 0 0 0 0.5rem;
// `;

// const Reply = ({ latestComments }) => {
//   return (
//     <>
//       <MessageHead>
//         <MessageAuthor>{latestComments.author}</MessageAuthor>
//         <MessageTime>{latestComments.time}</MessageTime>
//       </MessageHead>
//       <div>{latestComments.body}</div>
//     </>
//   );
// };

// export default Reply;

import React from "react";
import styled from "styled-components";
import { Typography, Divider } from "@material-ui/core";

const StyledDivider = styled(Divider)`
  && {
    margin: 12px 0;
    background-color: ${(props) => props.theme.color.white};
  }
`;

const ReplyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: pre-wrap;
`;

const ContentText = styled.div`
  margin: 12px 0;
  padding: 0 12px;
  color: ${(props) => props.theme.color.darkGray};
`;

export default function Reply({ reply }) {
  return (
    <>
      <StyledDivider />
      <ReplyContainer>
        <ContentText>
          <Typography variant="body1">{reply}</Typography>
        </ContentText>
      </ReplyContainer>
    </>
  );
}
