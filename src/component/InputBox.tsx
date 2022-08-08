import { PictureOutlined, SendOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { chatHistory, ChatType } from "../store/store";
import { ClearButton, color } from "../style/styles";
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
  flex: 4;
  height: 100%;
  padding: 20px 0 25px 40px;
  border: none;
  outline: none;
`;

const IconBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding-right: 20px;
  color: white;
  border: none;
  background: transparent;
`;
const FileBox = styled.div`
  color: ${color.main};
  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

function InputBox() {
  const setChatLog = useSetRecoilState<ChatType[]>(chatHistory);
  const chatLog = useRecoilState(chatHistory);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const submitData = (e: React.FormEvent) => {
    e.preventDefault();
    const data = inputRef.current?.value;
    if (data) {
      setChatLog((prev) => [...prev, { type: "user", content: data }]);
      inputRef.current.value = "";
    }
    console.log(data);
    console.log("submit", chatLog);
  };

  const addPic = (e: React.MouseEvent) => {
    e.preventDefault();
    if (fileRef.current) {
      fileRef.current.click();
    }
    console.log("add picture");
  };

  const getPic = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    console.log("test", target.value);
  };

  return (
    <form onSubmit={submitData}>
      <StyledInputBox>
        <CustomInput placeholder="write a message..." required ref={inputRef} />
        <IconBox>
          <FileBox>
            <FileInput type="file" ref={fileRef} onChange={getPic} />
            <PictureOutlined onClick={addPic} />
          </FileBox>

          <ClearButton>
            <SendOutlined
              style={{
                color: `${color.dark}`,
                cursor: "pointer",
              }}
            />
          </ClearButton>
        </IconBox>
      </StyledInputBox>
    </form>
  );
}

export default InputBox;
