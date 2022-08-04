import styled from "styled-components";

export const color = {
  main: "#7f4fc150",
  dark: "#6609e7af",
  inner: "#eaeafb",
};

export const MediaQuery = (maxWidth: number): string => {
  return `@media (max-width: ${maxWidth}px)`;
};

export const viewpoint = {
  custom: MediaQuery,
  desktop: MediaQuery(922),
  tablet: MediaQuery(768),
  phone: MediaQuery(576),
};

export const Content = styled.div`
  ${viewpoint.desktop} {
    background: white;
  }
  ${viewpoint.tablet} {
    background: ivory;
  }
  ${viewpoint.phone} {
    background: palegoldenrod;
  }
`;

export const CenterBoard = styled.div`
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const ChatBoard = styled.div`
  position: relative;
  border-radius: 50px;
  width: 500px;
  height: 700px;
  box-shadow: 4px 5px 50px #1703323e;
  overflow: hidden;
`;

export const Header = styled.header`
  border-radius: 50px 50px 0 0;
  padding: 30px 50px 20px;
  font-weight: bold;
  font-size: 28px;
  background-color: ${color.main};
`;

export const InputBox = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ddd;
`;

export const CustomInput = styled.input`
  flex: 5;
  height: 100%;
  padding: 20px 0 25px 40px;
  border: none;
  outline: none;
`;

export const IconBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  height: 100%;
`;

export const PaddingBox = styled.div`
  padding: 20px;
`;
