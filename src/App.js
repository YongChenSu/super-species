import Routes from "./routes";
import { HashRouter as Router } from "react-router-dom";
import { Container } from "@material-ui/core";
import Header from "./components/common/Header";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import theme from "./theme";
import store from "./redux/store";

const Content = styled.div`
  margin-top: 4rem;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Header />
          <Content>
            <Routes />
          </Content>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
