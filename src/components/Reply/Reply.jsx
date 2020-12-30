import styled from "styled-components";

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

const Reply = ({ latestComments }) => {
  return (
    <>
      <MessageHead>
        <MessageAuthor>{latestComments.author}</MessageAuthor>
        <MessageTime>{latestComments.time}</MessageTime>
      </MessageHead>
      <div>{latestComments.body}</div>
    </>
  );
};

export default Reply;
