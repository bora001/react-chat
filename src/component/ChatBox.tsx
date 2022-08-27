import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { chatHistory } from "../store/store";
import { PaddingBox } from "../style/styles";
import BotMsg from "./BotMsg";
import UserMsg from "./UserMsg";

type ChatBoxType = {
  scrollToRef: React.RefObject<HTMLDivElement>;
};

const ScrollBottom = styled.div`
  margin: 0;
  padding: 0;
`;

function ChatBox({ scrollToRef }: ChatBoxType) {
  const chatLog = useRecoilValue(chatHistory);

  return (
    <PaddingBox padding="20px" overflowY="scroll">
      {chatLog.map((chat, index) =>
        chat.type == "bot" ? (
          <BotMsg key={index} content={chat.content} icon={chat.icon} />
        ) : (
          <UserMsg key={index} data={chat} />
        )
      )}
      <ScrollBottom ref={scrollToRef} />
    </PaddingBox>
  );
}

export default ChatBox;
