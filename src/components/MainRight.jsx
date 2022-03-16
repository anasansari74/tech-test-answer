import styled from "styled-components";

import { IoIosArrowDown } from "react-icons/io";

import userPfp from "../../images/user-pfp.png";
import { useState } from "react";

const MainRightDiv = styled.div`
  display: grid;
  place-items: center;

  .container {
    display: grid;
    place-items: center;

    height: auto;
    width: auto;

    color: black;

    border-radius: 20px;

    position: relative;
    top: 80px;
    left: 120px;
  }

  .close {
    position: absolute;

    cursor: pointer;

    top: -10px;
    right: -10px;

    justify-self: end;
    border-radius: 50%;
    border: solid 1px darkblue;
    background-color: darkblue;

    width: 30px;
    height: 30px;

    font-size: 1.5rem;
    color: dodgerblue;

    display: grid;
    place-content: center;
  }
  .top {
    display: grid;
    grid-template:
      "pf-pic pf-name" auto
      "pf-pic description" auto/
      1fr 3fr;

    background-color: lightgrey;

    border-radius: 10px 10px 0 0;

    aligh-items: center;
    grid-gap: 0.2rem;

    padding: 0.5rem;

    width: auto;
  }

  .pf-pic {
    display: grid;
    grid-area: pf-pic;
    place-items: center;
  }
  .pf-name {
    display: grid;
    grid-area: pf-name;
    align-items: center;
  }
  .pf-name p {
    font-size: 18px;
    margin: 0;
  }
  .description {
    display: grid;
    grid-area: description;
  }

  .description span {
    font-weight: bold;
    color: green;
  }

  .description p {
    margin: 0;
  }

  .bottom {
    display: grid;
    grid-auto-flow: column;
    place-items: center;

    grid-gap: 1rem;

    background-color: white;

    width: 100%;

    border-radius: 0 0 10px 10px;
  }

  .reply {
    cursor: pointer;
  }

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export default function MainRight() {
  const [show, setShow] = useState("yes");

  return (
    <MainRightDiv>
      {show === "yes" ? (
        <div className="container">
          <button
            className="close"
            onClick={e => {
              setShow("");
            }}
          >
            {/* <GrFormClose /> */}
            &times;
          </button>
          {/* <div className="card"> */}
          <div className="top">
            <div className="pf-pic">
              {/* <CgProfile /> */}
              <img src={userPfp} alt="" height={"60px"} />
            </div>
            <div className="pf-name">
              <p>Sarah Smith</p>
            </div>
            <div className="description">
              <p>
                Position goes here | <span>Online</span>
              </p>
            </div>
          </div>
          <div className="bottom">
            <p>Hi! How can I help you?</p>
            <p className="reply">
              Reply <IoIosArrowDown />
            </p>
          </div>
          {/* </div> */}
        </div>
      ) : (
        <></>
      )}
    </MainRightDiv>
  );
}
