// import { useState } from "react";
import styled from "styled-components";
import CardDeRecomendacao from "../CardRecomendacao";
import { Titulo } from "../Titulo";
import { livrosLancamentos } from "./dadosLancamentos";
import livroRecomendado from '../../images/livro2.png'

const Pesquisa = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  color: #ffffff;
  text-align: center;
  padding: 4rem 0;
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

const DivResultado = styled.div`
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Lancamentos = () => {
  return (
    <Pesquisa>
      <Titulo cor="#F49D1A" fontSize="2rem">
        Lançamentos
      </Titulo>
      <DivResultado>
        {livrosLancamentos.map((livro) => {
          return (
            <Resultado>
              <p>{livro.nome} </p>
              <img src={livro.src} alt="imagem" />
            </Resultado>
          );
        })}
      </DivResultado>
      <CardDeRecomendacao
        titulo="React Native"
        subtitulo="Criando uma aplicação completa."
        descricao="O melhor curso para ingressar no mercado mobile."
        img={livroRecomendado}
      />
    </Pesquisa>
  );
};

export default Lancamentos;
