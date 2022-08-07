import React from "react";
import { PaddingBox } from "../style/styles";
import BotMsg from "./BotMsg";
import UserMsg from "./UserMsg";

function ChatBox() {
  return (
    <PaddingBox padding="20px">
      <BotMsg />
      <UserMsg />
    </PaddingBox>
  );
}

export default ChatBox;
