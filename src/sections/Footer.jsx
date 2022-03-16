import styled from "styled-components";

import { FiArrowUp } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const FooterDiv = styled.div`
  .back-to-top {
    cursor: pointer;
    color: white;
    background-color: dodgerblue;

    width: fit-content;
    margin: 0 70%;
  }

  .footer {
    display: grid;

    color: white;
    background-color: #343434;
    border-top: 0.3rem solid dodgerblue;
  }

  .footer-wrapper {
    margin: 0.5rem auto;
    width: 80%;
  }

  .footer-wrapper h4 {
    color: dodgerblue;
  }

  .footer-info {
    display: grid;
    grid-auto-flow: column;
    font-size: 12px;
    grid-gap: 2rem;
  }

  .follow-us {
    color: dodgerblue;
  }

  .sm-logos {
    display: grid;
    grid-auto-flow: column;
  }

  .copyright {
    margin-left: 10rem;
  }

  .copyright p {
    font-size: 8px;
  }

  @media screen and (max-width: 1200px) {
    .copyright {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 800px) {
    .footer-info {
      grid-auto-flow: row;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default function Footer() {
  return (
    <FooterDiv>
      <div
        className="back-to-top"
        onClick={e => window.scrollTo(0, 0)({ behavior: "smooth" })}
      >
        <FiArrowUp />
      </div>
      <div className="footer">
        <div className="footer-wrapper">
          <h4>system.suny.edu</h4>
          <div className="footer-info">
            <div>
              <p>Contact Us</p>
              <p>Careers at SUNY</p>
              <p>Attend SUNY</p>
              <p>What is SUNY?</p>
              <p>Why Does SUNY Matter?</p>
            </div>
            <div>
              <p>News</p>
              <p>Privacy Policy</p>
              <p>Web Accessibility</p>
              <p>Board of Trustees</p>
              <p>Health Alert</p>
            </div>
            <div>
              <p>SUNY Portal</p>
              <p>SUNY Blue Login</p>
              <p>SUNY Email Login</p>
            </div>
            <div>
              <p className="follow-us">Follow Us</p>
              <div className="sm-logos">
                <BsInstagram />
                <FaTwitter />
                <ImFacebook />
                <FaLinkedinIn />
                <AiFillYoutube />
              </div>
            </div>
            <div className="copyright">
              <img
                src="https://www.suny.edu/media/suny/style-assets/images/logo-suny_footer.png"
                alt="logo"
                height={"80px"}
              />
              <p>© Copyright © 2019 SUNY. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </FooterDiv>
  );
}
