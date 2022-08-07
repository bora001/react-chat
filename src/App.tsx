import "antd/dist/antd.css";
import ChatBox from "./component/ChatBox";
import InputBox from "./component/InputBox";
import { CenterBoard, ChatBoard, Header } from "./style/styles";
function App() {
  return (
    <CenterBoard>
      <ChatBoard>
        <Header>
          <div>Chat</div>
        </Header>
        <ChatBox />
        <InputBox />
      </ChatBoard>
    </CenterBoard>
  );
}

export default App;
