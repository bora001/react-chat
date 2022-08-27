import styled from "styled-components";
import { color } from "../style/styles";

const BotBox = styled.div`
  display: inline-flex;
  width: auto;
  margin: 5px 0;
  align-items: center;
  background: ${color.light};
  padding: 10px;
  border-radius: 15px;
`;
const BotMsg = ({ content, icon }: { content: string; icon: string }) => {
  return (
    <>
      <BotBox>
        <img
          src="https://cdn.pixabay.com/photo/2017/10/24/00/39/bot-icon-2883144_960_720.png"
          style={{ width: "30px" }}
        />
        <div style={{ margin: " 0 20px" }}>
          <p>{`${content}`}</p>
        </div>
      </BotBox>
    </>
  );
};

export default BotMsg;
