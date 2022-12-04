import styled from "styled-components";
import Logo from "../Logo";

const DivLogo = styled.div`
    display: flex;
    justify-content: center;
`;

const Footer = () => {
  return (
    <DivLogo>
      <Logo></Logo>
    </DivLogo>
  );
};

export default Footer;
