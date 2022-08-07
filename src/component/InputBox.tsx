import { SendOutlined } from "@ant-design/icons";
import React, { useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { chatHistory, ChatType } from "../store/store";
import { color } from "../style/styles";
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

const IconButton = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  cursor: pointer;
  border: none;
  background: transparent;
`;

function InputBox() {
  const setChatLog = useSetRecoilState<ChatType[]>(chatHistory);
  const chatLog = useRecoilState(chatHistory);
  const inputRef = useRef<HTMLInputElement>(null);
  //   console.log(chatLog);

  const submitData = (e: React.FormEvent) => {
    e.preventDefault();
    const data = inputRef.current?.value;
    if (data) {
      setChatLog((prev) => [...prev, { type: "user", content: data }]);
      inputRef.current.value = "";
    }
    console.log("submit", chatLog);
  };

  return (
    <form onSubmit={submitData}>
      <StyledInputBox>
        <CustomInput placeholder="write a message..." required ref={inputRef} />
        <IconButton>
          <SendOutlined
            style={{
              color: `${color.dark}`,
            }}
          />
        </IconButton>
      </StyledInputBox>
    </form>
  );
}

export default InputBox;
