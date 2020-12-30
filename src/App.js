import Routes from "./routes";
import { HashRouter as Router } from "react-router-dom";
import { Container } from "@material-ui/core";
import Header from "./components/common/Header";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 4rem;
`;

const App = () => {
  return (
    <Container maxWidth="md">
      <Router>
        <Header />
        <Content>
          <Routes />
        </Content>
      </Router>
    </Container>
  );
};

export default App;
