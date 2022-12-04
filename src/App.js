import styled from "styled-components";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Search from "./componentes/Search";

//styled components
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <Footer />
    </AppContainer>
  );
}

export default App;
