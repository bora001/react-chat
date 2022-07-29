import "antd/dist/antd.css";
import { CenterBoard, ChatBoard, Header } from "./style/styles";
function App() {
  return (
    <CenterBoard>
      <ChatBoard>
        <Header>
          <div>Chat</div>
        </Header>
      </ChatBoard>
    </CenterBoard>
  );
}

export default App;
