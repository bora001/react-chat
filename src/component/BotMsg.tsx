import styled from "styled-components";
import { color } from "../style/styles";

function BotMsg() {
  const BotBox = styled.div`
    display: inline-flex;
    width: auto;
    align-items: center;
    background: ${color.inner};
    padding: 10px;
    border-radius: 20px;
  `;

  return (
    <BotBox>
      <img
        src="https://cdn.pixabay.com/photo/2017/10/24/00/39/bot-icon-2883144_960_720.png"
        style={{ width: "30px" }}
      />
      <div style={{ margin: " 0 20px" }}>테스트</div>
    </BotBox>
  );
}

export default BotMsg;
