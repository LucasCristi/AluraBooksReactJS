import styled from 'styled-components'
import Input from '../Input';

const Pesquisa = styled.section`
    color: #ffffff;
    text-align: center;
    padding: 4rem 0;
`

const Titulo = styled.h2`
    font-size: 2rem;
    width: 100%;
    margin-bottom: 2rem;
    margin-top: 2rem;
`
const SubTitulo = styled.h3`
    font-size: 1rem;
    font-weight: 700;
`

const Search = () => {
  return (
    <Pesquisa>
      <Titulo>Encontre seu livro em nossa estante.</Titulo>
      <SubTitulo>Pesquisa:</SubTitulo>
      <Input
      placeholder='O que você procura?'
      />
    </Pesquisa>
  );
};

export default Search;
