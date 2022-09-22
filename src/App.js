import { ThemeProvider } from "styled-components";
import { Container } from "./styledComponents/ContainerStyled";
import { HeroStyled } from "./styledComponents/HeroStyled";
import { Global } from "./styledComponents/GlobalStyles";
import { theme } from "./styledComponents/theme";
import { Form } from "./components/form/Form";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <Container>
          <HeroStyled></HeroStyled>
          <Form />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
