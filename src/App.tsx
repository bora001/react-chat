import "antd/dist/antd.css";
import { useRef } from "react";
import ChatBox from "./component/ChatBox";
import InputBox from "./component/InputBox";
import { CenterBoard, ChatBoard, Header } from "./style/styles";
function App() {
  const scrollToRef = useRef<HTMLDivElement>(null);

  return (
    <CenterBoard>
      <ChatBoard>
        <Header>Chat</Header>
        <ChatBox scrollToRef={scrollToRef} />
        <InputBox scrollToRef={scrollToRef} />
      </ChatBoard>
    </CenterBoard>
  );
}

export default App;
