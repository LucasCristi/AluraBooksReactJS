import ImageLogo from "../../images/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin-left: 0.5rem;
`;

const LogoImg = styled.img`
  margin: 1rem;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={ImageLogo} alt="Imagem da logo" />
      <p>
        <strong>Alura</strong>Books
      </p>
    </LogoContainer>
  );
};

export default Logo;
