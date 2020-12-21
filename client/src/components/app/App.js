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
  /* background: var(--light-gray); */
  position: relative;
  /* background-image: url(${background});
  
  background-repeat: round;  */
  /* background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNSrhbqKsSe-rEL3YYKyUZj9eZ1SxB3_GVDw&usqp=CAU"); */
  /* background-image: url("https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"); */
  background-size: cover;
  background-image: url("https://lh3.googleusercontent.com/proxy/snjcr0I_DTPxo1so6zajDSMmvxjZa5iYeHCi9-V7HFA7KpAE0IhOhznaU4ol7I6Q2RGhY33I7X60H338D7VpuUXkpGp1X7nKjss9vpuXFoFfXZaMWnlJgU03i4wotrLZ-m7vmeyOjWHoOThtEgw");
  /* background-image: url("https://mewallpaper.com/thumbnail/abstract/7958-orange-yellow-gradient-background-hq-image-free-wallpaper.jpg"); */
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
