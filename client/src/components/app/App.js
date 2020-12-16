import styled from "styled-components";
import Header from "../header/Header";
import background from "../../resorces/background.svg";
import Home from "../pages/home/Home";
import { Switch, Route } from "react-router-dom";

import Map from "../pages/Map/Map";
import SendReview from "../pages/Send-Review/SendReview";
import Floter from "../floter/Floter";

const Container = styled.div`
  min-height: 100vh;
  background: var(--light-gray);
  position: relative;
  background-image: url(${background});
  background-repeat: round;
`;

const App = () => {
  return (
    <Container className="App">
      <Header />

      <Floter />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Map} path="/map" />
        <Route component={SendReview} path="/send" />
        {/* TODO: make functional component : Home page */}
      </Switch>
    </Container>
  );
};

export default App;
