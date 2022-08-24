import {
  CloseCircleTwoTone,
  PictureOutlined,
  SendOutlined,
} from "@ant-design/icons";
import React, { useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { chatHistory, ChatType } from "../store/store";
import { ClearButton, color, FlexBox } from "../style/styles";
import dayjs from "dayjs";

type InputBoxFormType = {
  img: boolean;
};

const InputBoxForm = styled.form<InputBoxFormType>`
  flex: ${({ img }) => (img ? 1.7 : 1)};
`;
const StyledInputBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 60px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
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

const ImagePreview = styled.div`
  position: "relative";
  padding: 0 35px;
  flex: 3;
`;

type InputBoxType = {
  scrollToRef: React.RefObject<HTMLDivElement>;
};

function InputBox({ scrollToRef }: InputBoxType) {
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

  React.useEffect(() => {
    scrollToRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    // getLocation();
  }, [chatLog]);

  const getLocation = () => {
    function success(position: any) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude, longitude, "LOCATION!");
    }

    function error() {
      console.log("error");
    }

    navigator.geolocation.getCurrentPosition(success, error);
  };

  const checkKeyword = (keyword: string) => {
    switch (keyword) {
      case "hello":
      case "hi":
      case "hey":
        setChatLog((prev) => [...prev, { type: "bot", content: `Hello 😊` }]);
        break;
      case "menu":
      case "help":
      case "question":
        setChatLog((prev) => [
          ...prev,
          {
            type: "bot",
            content: `
          What can I help you?🤗
          1 - weather, 2 - time, 3 - Date`,
          },
        ]);
        break;
      case "1":
      case "weather":
      case "Weather":
        setChatLog((prev) => [
          ...prev,
          { type: "bot", content: `Today weather is sunny!` },
        ]);
        break;
      case "2":
      case "Time":
      case "time":
        setChatLog((prev) => [
          ...prev,
          {
            type: "bot",
            content: `It is ${dayjs().format("hh:mm A")}`,
          },
        ]);
        break;
      case "3":
      case "Date":
      case "date":
        setChatLog((prev) => [
          ...prev,
          {
            type: "bot",
            content: `Today is ${dayjs().format("MMMM DD, dddd")}`,
          },
        ]);
        break;
      default:
        break;
    }
  };

  const submitData = (e: React.FormEvent) => {
    e.preventDefault();
    const data = inputRef.current?.value;
    if (data) {
      setChatLog((prev) => [
        ...prev,
        { type: "user", content: data, image: inputImage },
      ]);
      checkKeyword(String(data)?.toLowerCase());

      inputRef.current.value = "";
    }
    setInputImage("");
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
    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result;
      setInputImage(data);
    };
    if (file) reader.readAsDataURL(file[0]);
  };

  return (
    <InputBoxForm onSubmit={submitData} img={inputImage ? true : false}>
      <StyledInputBox>
        <FlexBox alignItems="center" width="100%">
          <FlexBox flex="4">
            <CustomInput
              placeholder="write a message..."
              required
              ref={inputRef}
            />
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
        </FlexBox>
        {inputImage && (
          <ImagePreview>
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
          </ImagePreview>
        )}
      </StyledInputBox>
    </InputBoxForm>
  );
}

export default InputBox;
