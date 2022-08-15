import styled from "styled-components";
import { ChatType } from "../store/store";
import { color, FlexBox } from "../style/styles";

const UserBox = styled.div`
  display: inline-flex;
  width: fit-content;
  margin: 5px 0;
  background: ${color.main};
  padding: 10px 20px;
  border-radius: 15px;
`;

interface UserMsgType {
  data: ChatType;
}

const UserMsg = ({ data }: UserMsgType) => {
  const { content, image } = data;
  return (
    <>
      <FlexBox flexDirection="column" alignItems="end">
        <UserBox>{content}</UserBox>
        {image && (
          <UserBox>
            <img src={image as string} style={{ width: "100px" }} />
          </UserBox>
        )}
      </FlexBox>
    </>
  );
};

export default UserMsg;
