import Profile from "../../images/perfil.svg";
import Cart from "../../images/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
  margin: 1rem;
  width: 1.2rem;
  align-items: center;
  cursor: pointer;
`;
const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const icons = [Profile, Cart];

const IconesHeader = () => {
  return (
    <Icones>
      {icons.map((icon) => {
        return (
          <Icone>
            <img src={icon} alt="Icon" />
          </Icone>
        );
      })}
    </Icones>
  );
};

export default IconesHeader;
