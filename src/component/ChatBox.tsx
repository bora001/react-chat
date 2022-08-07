import React from "react";
import { useRecoilValue } from "recoil";
import { chatHistory, ChatType } from "../store/store";
import { PaddingBox } from "../style/styles";
import BotMsg from "./BotMsg";
import UserMsg from "./UserMsg";

function ChatBox() {
  const chatlist = useRecoilValue<ChatType[]>(chatHistory);
  console.log(chatlist, "boot");
  return (
    <PaddingBox padding="20px">
      {chatlist.map((chat) => (chat.type == "bot" ? <BotMsg /> : <UserMsg />))}
    </PaddingBox>
  );
}

export default ChatBox;
