import React from "react";
import styled from "styled-components";
import { color, FlexBox } from "../style/styles";

function UserMsg() {
  const UserBox = styled.div`
    display: inline-flex;
    width: auto;
    align-items: center;
    margin: 5px 0;
    background: ${color.main};
    padding: 10px 20px;
    border-radius: 15px;
  `;
  return (
    <FlexBox justifyContent="right">
      <UserBox>UserMsg</UserBox>
    </FlexBox>
  );
}

export default UserMsg;
