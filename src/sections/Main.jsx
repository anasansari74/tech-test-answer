import styled from "styled-components";

import { IoIosArrowForward } from "react-icons/io";
import MainRight from "../components/MainRight";

const MainDiv = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  margin-top: 2rem;

  padding-bottom: 4rem;

  .title {
    font-size: 40px;
  }

  .under-title {
    font-size: 18px;
  }

  .button-div {
    display: grid;

    grid-auto-flow: column;
    grid-gap: 1.5rem;
  }

  .drop-down-button {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 0.5rem;

    font-size: small;

    place-items: center;

    padding: 1rem;
    border-radius: 10px;

    color: white;
    font-weight: bold;
    background-color: dodgerblue;
  }

  .drop-down-button: hover {
    box-shadow: 2px 1px 1px white;
    cursor: pointer;
  }
`;

export default function Main() {
  return (
    <MainDiv>
      <div className="main-left">
        <h1 className="title">Hero Header Title</h1>
        <p className="under-title">
          Description lorem ipsum dolor sit amet uistis.
        </p>
        <div className="button-div">
          <p className="drop-down-button">
            {" "}
            CHOOSE INDUSTRY FILTER <IoIosArrowForward />
          </p>

          <p className="drop-down-button">
            {" "}
            CHOOSE DEGREE FILTER <IoIosArrowForward />
          </p>
        </div>
      </div>
      <MainRight />
    </MainDiv>
  );
}
