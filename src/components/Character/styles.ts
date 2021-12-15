import styled from "styled-components";

export const Container = styled.div<{
  size: number;
  left: number;
  top: number;
}>`
  background-color: #ff0000;
  height: ${(props) => props.size}px;
  left: ${(props) => props.left}px;
  position: absolute;
  top: ${(props) => props.top}px;
  width: ${(props) => props.size}px;
`;
