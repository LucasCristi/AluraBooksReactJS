import styled from "styled-components";
import { Titulo } from "../Titulo";

const Card = styled.section`
  box-shadow: 0.2rem 0.3rem 1.5rem #000;
  padding: 0.5rem;
  border-radius: 10px;
  display: flex;
  width: 50%;
  gap: 0.1rem;
  justify-content: space-around;
  margin: 0 auto;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;
const SubTitulo = styled.h3`
margin: 0;
font-size: 1.5rem;
`;
const Descricao = styled.p`
  font-style: italic;
`;
const ImagemDoLivro = styled.img`
  width: 7rem;
  margin: 20% auto .5rem;
  border-radius: 10px;
`;
const Botao = styled.button`
  padding: .2rem;
  margin: 0 auto;
  background-color: #f49d1a;
  border: none;
  transition: 1s;
  color: #fff;
  border-radius: 10px;
  display:block;

  &:hover {
    background-color: transparent;
    cursor: pointer;
  }
`;

const CardDeRecomendacao = ({ titulo, subtitulo, descricao, img }) => {
  return (
    <Card>
      <div>
        <Titulo cor="#F49D1A" fontSize="1.5rem">
          {titulo}{" "}
        </Titulo>
        <SubTitulo>{subtitulo} </SubTitulo>
        <Descricao>{descricao} </Descricao>
      </div>
      <div>
        <ImagemDoLivro src={img} />
        <Botao>Saiba Mais</Botao>
      </div>
    </Card>
  );
};

export default CardDeRecomendacao;
