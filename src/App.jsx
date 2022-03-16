import Header from "./sections/Header";
import Main from "./sections/Main";
import Cards from "./sections/Cards";
import Form from "./sections/Form";
import Quote from "./sections/Quote";
import Achievements from "./sections/Achievements";
import Footer from "./sections/Footer";

import styled from "styled-components";

const MainDiv = styled.div`
  display: grid;
  place-items: center;

  color: white;

  background-image: url("https://explore.suny.edu/assets/suny-online-/images/hero.jpg");

  position: relative;

  padding-bottom: 2rem;

  .wrapper {
    display: grid;
    grid-auto-flow: rows;

    width: 80%;
    margin: 0.5rem auto;
  }

  @media screen and (max-width: 820px) {
    .wrapper {
      width: 80vw;
      margin: 0.2rem;
    }
  }
`;

const LoremDiv = styled.div`
  display: grid;
  place-items: center;

  text-align: center;

  line-height: 30px;

  width: 75%;
  margin: 0.5rem auto;
`;

function App() {
  return (
    <div className="App">
      <MainDiv>
        <Header />
        <div className="wrapper">
          <Main />
          <Cards />
        </div>
      </MainDiv>
      <LoremDiv>
        <h1>Content Title Goes Here</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros.
        </p>
      </LoremDiv>
      <Form />
      <Quote />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
