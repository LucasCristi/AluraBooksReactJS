import { useState } from "react";
import styled from "styled-components";
import Input from "../Input";
import { livros } from "./dadosDaPesquisa";
import { Titulo } from "../Titulo";

const Pesquisa = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  color: #ffffff;
  text-align: center;
  padding: 4rem 0;
`;

const SubTitulo = styled.h3`
  font-size: 1rem;
  font-weight: 700;
`;

const DivResultado = styled.div`
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Resultado = styled.div`
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  margin: 1rem 1rem;
  border: 1px solid #fff;
  border-radius: 10px;
  transition: 0.7s;

  img {
    width: 15rem;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.3;
  }
`;

const Search = () => {
  const [livrosPesquisados, setlivrosPesquisados] = useState([]);
  //   console.log(livrosPesquisados)

  return (
    <Pesquisa>
      <Titulo cor="#F49D1A" fontSize="2rem">
        Encontre seu livro em nossa estante.
      </Titulo>
      <SubTitulo>Pesquisa:</SubTitulo>
      <Input
        placeholder="O que você procura?"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoDaPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          setlivrosPesquisados(resultadoDaPesquisa);
        }}
      />
      <DivResultado>
        {livrosPesquisados.map((livro) => {
          return (
            <Resultado>
              <p>{livro.nome} </p>
              <img src={livro.src} alt="Teste" />
            </Resultado>
          );
        })}
      </DivResultado>
    </Pesquisa>
  );
};

export default Search;
