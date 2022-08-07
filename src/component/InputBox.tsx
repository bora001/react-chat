import { SendOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import { color } from "../style/styles";

function InputBox() {
  const StyledInputBox = styled.div`
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #ddd;
  `;

  const CustomInput = styled.input`
    flex: 5;
    height: 100%;
    padding: 20px 0 25px 40px;
    border: none;
    outline: none;
  `;

  const IconBox = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
    height: 100%;
  `;

  return (
    <StyledInputBox>
      <CustomInput placeholder="write a message..." />
      <IconBox>
        <SendOutlined
          style={{
            color: `${color.dark}`,
          }}
        />
      </IconBox>
    </StyledInputBox>
  );
}

export default InputBox;
