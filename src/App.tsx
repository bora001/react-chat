import { SendOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import {
  CenterBoard,
  ChatBoard,
  color,
  CustomInput,
  Header,
  IconBox,
  InputBox,
} from "./style/styles";
function App() {
  return (
    <CenterBoard>
      <ChatBoard>
        <Header>
          <div>Chat</div>
        </Header>
        <InputBox>
          <CustomInput placeholder="write a message..." />
          <IconBox>
            <SendOutlined
              style={{
                color: `${color.dark}`,
              }}
            />
          </IconBox>
        </InputBox>
      </ChatBoard>
    </CenterBoard>
  );
}

export default App;
