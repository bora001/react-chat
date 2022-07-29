import styled from "styled-components";

export const color = {
  main: "#7f4fc150",
  dark: "6609e7af",
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
  border-radius: 50px;
  width: 500px;
  height: 700px;
  box-shadow: 4px 5px 50px #1703323e;
`;

export const Header = styled.header`
  border-radius: 50px 50px 0 0;
  padding: 30px 50px 20px;
  font-weight: bold;
  font-size: 28px;
  background-color: ${color.main};
`;