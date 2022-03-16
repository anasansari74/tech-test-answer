import { useState } from "react";
import styled from "styled-components";

import optionsLogo from "../../images/options.svg";

const HeaderDiv = styled.div`
  display: grid;
  grid-auto-flow: column;

  width: 100%;

  place-items: center;

  padding: 2rem;

  grid-gap: 1rem;

  font-size: small;

  .logo {
    padding: 0 2rem;
  }

  p {
    cursor: pointer;
  }

  .selected {
    font-weight: bold;
    border-bottom: 0.2rem solid dodgerblue;
  }

  .options-logo {
    padding: 1rem;
  }
  .options-logo: hover {
    cursor: pointer;
    background-color: lightblue;
    border-radius: 50%;
  }

  .mid {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2rem;
  }

  @media screen and (max-width: 820px) {
    .mid {
      display: none;
    }
  }
`;

export default function Header() {
  const [selected, setSelected] = useState("request");

  return (
    <HeaderDiv className="wrapper">
      <img
        src="https://explore.suny.edu/assets/SO_logo.png"
        alt="Suny Online logo"
        className="logo"
        height={"65px"}
      />
      <div className="mid">
        <p className={selected === "explore" ? "selected" : ""}>
          EXPLORE ONILNE DEGREES
        </p>
        <p className={selected === "request" ? "selected" : ""}>REQUEST INFO</p>
        <p className={selected === "affordable" ? "selected" : ""}>
          AFFORDABLE TUITION
        </p>
        <p className={selected === "faqs" ? "selected" : ""}>FAQs</p>
      </div>
      <img
        className="options-logo"
        src={optionsLogo}
        alt="Options Svg"
        height="20px"
        width="20px"
      />
    </HeaderDiv>
  );
}
