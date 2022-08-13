import {
  CloseCircleOutlined,
  CloseCircleTwoTone,
  PictureOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { read } from "fs";
import React, { useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { chatHistory, ChatType } from "../store/store";
import { ClearButton, color, FlexBox } from "../style/styles";
const StyledInputBox = styled.div`
  position: absolute;
  width: 100%;
  min-height: 60px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ddd;
`;

const CustomInput = styled.input`
  height: 100%;
  padding: 20px 0 20px 40px;
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
  const [inputImage, setInputImage] = React.useState<
    string | ArrayBuffer | null
  >();
  const chatLog = useRecoilState(chatHistory);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const removeImg = () => {
    setInputImage("");
  };
  const submitData = (e: React.FormEvent) => {
    e.preventDefault();
    const data = inputRef.current?.value;
    console.log(data);
    if (data) {
      setChatLog((prev) => [
        ...prev,
        { type: "user", content: data, image: inputImage },
      ]);
      inputRef.current.value = "";
    }
    setInputImage("");
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
    const file = target.files;
    // if (file !== null) {
    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result;
      setInputImage(data);
    };
    if (file) reader.readAsDataURL(file[0]);
  };

  return (
    <form onSubmit={submitData}>
      <StyledInputBox>
        <FlexBox flexDirection="column" flex="4">
          <CustomInput
            placeholder="write a message..."
            required
            ref={inputRef}
          />
          {inputImage && (
            <div
              style={{
                position: "relative",
                padding: "0 35px 5px",
              }}
            >
              <CloseCircleTwoTone
                style={{
                  zIndex: "99",
                  position: "absolute",
                  cursor: "pointer",
                }}
                onClick={removeImg}
                twoToneColor="#9f9d9e"
              />
              <img src={inputImage as string} style={{ width: "70px" }} />
            </div>
          )}
        </FlexBox>

        <IconBox>
          <FileBox>
            <FileInput
              type="file"
              ref={fileRef}
              accept="image/*"
              onChange={getPic}
            />
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
