import styled from "styled-components";

export const Container = styled.div<{
  size: number;
  left: number;
  top: number;
  sidesPos: number;
}>`
  background-image: url('/assets/char.png');
  background-position: 0px ${props => props.sidesPos}px;
  height: ${(props) => props.size}px;
  left: ${(props) => props.left}px;
  position: absolute;
  top: ${(props) => props.top}px;
  width: ${(props) => props.size}px;
`;
