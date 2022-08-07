import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { chatHistory, ChatType } from "../store/store";
import { PaddingBox } from "../style/styles";
import BotMsg from "./BotMsg";
import UserMsg from "./UserMsg";

function ChatBox() {
  const chatLog = useRecoilValue(chatHistory);
  useEffect(() => {
    console.log(chatLog, "home");
  }, [chatLog]);
  return (
    <>
      <PaddingBox padding="20px">
        {chatLog.map((chat, index) =>
          chat.type == "bot" ? (
            <BotMsg key={index} content={chat.content} />
          ) : (
            <UserMsg key={index} content={chat.content} />
          )
        )}
      </PaddingBox>
    </>
  );
}

export default ChatBox;
