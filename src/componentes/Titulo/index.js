import styled from "styled-components";

export const Titulo = styled.h2`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  width: 100%;
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-transform: uppercase;
  color: ${(props) => (props.cor ? props.cor : "#000")};
`;
