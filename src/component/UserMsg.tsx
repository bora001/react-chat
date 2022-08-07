import React from "react";
import styled from "styled-components";
import { color, FlexBox } from "../style/styles";

const UserBox = styled.div`
  display: inline-flex;
  width: auto;
  align-items: center;
  margin: 5px 0;
  background: ${color.main};
  padding: 10px 20px;
  border-radius: 15px;
`;

const UserMsg = ({ content }: { content: string }) => {
  return (
    <>
      <FlexBox justifyContent="right">
        <UserBox>{content}</UserBox>
      </FlexBox>
    </>
  );
};

export default UserMsg;
