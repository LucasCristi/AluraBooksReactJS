import Logo from "../Logo";
import MenuOpcoes from "../MenuOpcoes";
import IconesHeader from "../IconesHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <MenuOpcoes />
      <IconesHeader />
    </HeaderContainer>
  );
};

export default Header;
