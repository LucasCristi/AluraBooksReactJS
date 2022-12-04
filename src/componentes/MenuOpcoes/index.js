import styled from "styled-components";

const Options = styled.ul`
  display: flex;
`;

const Option = styled.li`
  font-size: 1.2rem;
  display: flex;
  min-width: 12rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 0.3rem;
  cursor: pointer;
`;

const textOptions = ["home", "categorias", "favoritos", "minha estante"];

const MenuOpcoes = () => {
  return (
    <Options>
      {textOptions.map((text) => {
        return (
          <Option>
            <p>{text} </p>
          </Option>
        );
      })}
    </Options>
  );
};

export default MenuOpcoes;
