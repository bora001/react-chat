import styled, { CSSProperties } from "styled-components";

export const color = {
  main: "#7f4fc150",
  dark: "#6609e7af",
  light: "#eaeafb",
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const ChatBoard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 50px;
  width: 500px;
  height: 700px;
  box-shadow: 4px 5px 50px #1703323e;
  overflow: hidden;
`;

export const Header = styled.header`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 40px;
  border-radius: 50px 50px 0 0;
  font-weight: bold;
  font-size: 28px;
  background-color: ${color.main};
`;

export const PaddingBox = styled.div<CSSProperties>`
  padding: ${(props) => props.padding};
  overflow-y: ${(props) => props.overflowY};
  flex: 6;
`;

export const FlexBox = styled.div<CSSProperties>`
  display: flex;
  width: ${(props) => props.width};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  flex: ${(props) => props.flex};
  align-items: ${(props) => props.alignItems};
`;

export const ClearButton = styled.button<CSSProperties>`
  border: none;
  background-color: transparent;
`;
